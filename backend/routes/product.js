const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Product = require('../model/productModel');

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadDir);
  },
  filename: function (_req, file, cb) {
    const safe = file.originalname.replace(/\s+/g, '_');
    cb(null, Date.now() + '-' + safe);
  },
});

const upload = multer({ storage });


function parseFlavourField(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed
        .map((f) => {
          if (typeof f === 'string') return { name: f.trim(), price: 0 };
          return {
            name: (f.name || '').trim(),
            price: Number(f.price) || 0,
          };
        })
        .filter((f) => f.name);
    }
  } catch {
  }
  return raw
    .split(',')
    .map((s) => ({ name: s.trim(), price: 0 }))
    .filter((f) => f.name);
}

function parseFeaturesPrice(raw) {
  if (!raw) {
    return { eggless: 100, shape: 100, fondant: 600 };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      eggless: Number(parsed.eggless) || 0,
      shape: Number(parsed.shape) || 0,
      fondant: Number(parsed.fondant) || 0,
    };
  } catch {
    return { eggless: 100, shape: 100, fondant: 600 };
  }
}


router.post('/', upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      price,
      minQuantity,
      butterCream,
      freshCream,
      exotic,
      featuresPrice,
      ratings,
      category,
      stock,
      description,
    } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required.' });
    }

    const doc = new Product({
      name: name.trim(),
      price: Number(price) || 0,
      minQuantity: parseFloat(minQuantity) || 0.5,
      image: req.file ? req.file.filename : '',

      butterCream: parseFlavourField(butterCream),
      freshCream: parseFlavourField(freshCream),
      exotic: parseFlavourField(exotic),

      featuresPrice: parseFeaturesPrice(featuresPrice),

      ratings: ratings !== undefined ? Number(ratings) : undefined,
      category: category || undefined,
      stock: stock !== undefined ? Number(stock) : undefined,
      description: description || undefined,
    });

    const saved = await doc.save();
    res.status(201).json({ message: 'Product saved successfully', product: saved });
  } catch (err) {
    console.error(' Error saving product:', err);
    res.status(500).json({ error: 'Failed to save product' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const products = await Product.find().lean();
    res.json(products);
  } catch (err) {
    console.error('get products error:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id).lean();
    if (!prod) return res.status(404).json({ error: 'Product not found' });
    res.json(prod);
  } catch (err) {
    console.error('get product error:', err);
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});


// UPDATE product
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      price,
      minQuantity,
      butterCream,
      freshCream,
      exotic,
      featuresPrice,
      ratings,
      category,
      stock,
      description,
    } = req.body;

    const updateData = {};

    if (name) updateData.name = name.trim();
    if (price) updateData.price = Number(price);
    if (minQuantity) updateData.minQuantity = parseFloat(minQuantity) || 0.5;

    if (req.file) {
      updateData.image = req.file.filename;
    }

    if (butterCream) updateData.butterCream = parseFlavourField(butterCream);
    if (freshCream) updateData.freshCream = parseFlavourField(freshCream);
    if (exotic) updateData.exotic = parseFlavourField(exotic);

    if (featuresPrice) updateData.featuresPrice = parseFeaturesPrice(featuresPrice);

    if (ratings !== undefined) updateData.ratings = Number(ratings);
    if (category) updateData.category = category;
    if (stock !== undefined) updateData.stock = Number(stock);
    if (description) updateData.description = description;

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ error: 'Product not found' });

    res.json({ message: 'Product updated successfully', product: updated });
  } catch (err) {
    console.error('update product error:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('delete product error:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
