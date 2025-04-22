import express from 'express';
import fs from 'fs';

const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());  // Middleware para parsear JSON
const port = 3000;

app.get('/', (req, res) => {
    res.send('e-commerce app práctica 3');
});

app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
});
