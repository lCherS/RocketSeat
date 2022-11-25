import { Router } from "express";
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

interface appointment {
  id: string;
  provider: string;
  date: Date;
}

const appointmentsRouter = Router();

const appointments: appointment[] = new Array();

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment => isEqual(appointment.date,
    parsedDate));

  if (findAppointmentInSameDate) {
    return res.status(400).json({
      message: 'Appointment already exists'
    })
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);
  return res.json(appointment);

})


export default appointmentsRouter;
