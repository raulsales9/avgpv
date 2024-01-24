import express, { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import path from 'path';

mongoose.connect('mongodb://localhost:27017/avgpv')
    .then(async () => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch(err => console.error('No se pudo conectar a MongoDB', err));


interface IParticipant extends Document {
    _id: string;
    Nombre: string;
    FechaAlta: Date;
}

const ParticipantSchema: Schema = new Schema({
    _id: { type: String, required: true },
    Nombre: { type: String, required: true },
    FechaAlta: { type: Date, required: true },
});

const Participant = mongoose.model<IParticipant>('participant', ParticipantSchema);

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'));

app.use(express.json());

app.get('/misdatos', async (req: Request, res: Response) => {
    const datos = await Participant.find();
    res.send(datos);
});

app.post('/misdatos', async (req: Request, res: Response) => {
    let dato = new Participant({
        _id: req.body._id,
        Nombre: req.body.Nombre,
        FechaAlta: req.body.FechaAlta,
    });
    dato = await dato.save();

    res.send(dato);
});

app.get('/formulario', async (req: Request, res: Response) => {
    const participant = await Participant.findOne();
    if (!participant) {
        return res.status(404).send('No participant found');
    }
    res.render('forms', { participant });
});

app.listen(3000, () => console.log('Servidor ejecutándose en el puerto 3000'));
