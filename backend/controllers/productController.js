const Product = require('../model/productModel'); 

function parseFlavourField(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((f) => {
        if (typeof f === 'string') {
          return { name: f.trim(), price: 0 };
        }
        return {
          name: (f.name || '').trim(),
          price: Number(f.price) || 0,
        };
      }).filter(f => f.name);
    }
  } catch {
    return raw
      .split(',')
      .map((s) => ({ name: s.trim(), price: 0 }))
      .filter((f) => f.name);
  }
  return [];
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


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.json(products);
  } catch (err) {
    console.error('getProducts error:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('getSingleProduct error:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    console.log('--- createProduct body ---');
    console.log(req.body);
    if (req.file) console.log('image file:', req.file.filename);

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

    const imgFile = req.file ? req.file.filename : '';

    const doc = new Product({
      name: name?.trim() || 'Untitled',
      price: Number(price) || 0,
      minQuantity: parseFloat(minQuantity) || 0.5,
      image: imgFile,

      butterCream: parseFlavourField(butterCream),
      freshCream: parseFlavourField(freshCream),
      exotic: parseFlavourField(exotic),

      featuresPrice: parseFeaturesPrice(featuresPrice),

      ratings: Number(ratings) || undefined,
      category: category || undefined,
      stock: Number(stock) || undefined,
      description: description || undefined,
    });

    const saved = await doc.save();
    res.status(201).json({ message: 'Product added', product: saved });
  } catch (error) {
    console.error(' createProduct error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

