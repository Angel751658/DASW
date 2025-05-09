const User = require('../models/user');

// Creacion
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const user = new User({ name, email, password, age });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Leectura
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
exports.getUserByEmail = async (req, res) => {
    const user = await User.findOne({ email: req.params.email });
    user ? res.json(user) : res.status(404).json({ error: 'No encontrado' });
};

// Actualizacion
exports.updateUserByEmail = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: req.params.email },
            req.body,
            { new: true }
        );
        updatedUser ? res.json(updatedUser) : res.status(404).json({ error: 'No encontrado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Eliminacion
exports.deleteUserByEmail = async (req, res) => {
    const deletedUser = await User.findOneAndDelete({ email: req.params.email });
    deletedUser ? res.json({ message: 'Usuario eliminado' }) : res.status(404).json({ error: 'No encontrado' });
};














