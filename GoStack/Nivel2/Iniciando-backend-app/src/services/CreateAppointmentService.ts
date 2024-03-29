import { startOfHour } from "date-fns";
import { getCustomRepository } from "typeorm";

import AppError from '../errors/AppError';

import Appointment from "../models/appointment";
import AppointmentsRepository from "../repositories/appointmentsRepositories";

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppError('Appointment already exists')
    }

    const appointment = appointmentsRepository.create({ provider_id, date: appointmentDate })

    await appointmentsRepository.save(appointment);

    return appointment;
  }

}

export default CreateAppointmentService;
