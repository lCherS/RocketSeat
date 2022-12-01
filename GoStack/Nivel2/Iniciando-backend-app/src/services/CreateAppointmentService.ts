import { startOfHour } from "date-fns";

import Appointment from "../models/appointment";
import AppointmentsRepository from "../repositories/appointmentsRepositories";

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;
  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new Error('Appointment already exists')
    }

    const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate })

    return appointment;
  }

}

export default CreateAppointmentService;
