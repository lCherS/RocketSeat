import { isEqual } from 'date-fns';


import Appointment from "../models/appointment";

class ApppointmentsRepository {
  private appointment: Appointment[];

  constructor() {
    this.appointment = [];
  }

  public all(): Appointment[] {
    return this.appointment;
  }

  public findByDate(date: Date): Appointment | null {

    const findAppointment = this.appointment.find(appointment => isEqual(appointment.date,
      date));

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {

    const appointment = new Appointment(provider, date);

    this.appointment.push(appointment);

    return appointment;
  }
}

export default ApppointmentsRepository;
