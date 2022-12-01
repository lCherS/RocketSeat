import { isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm'

import Appointment from "../models/appointment";

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {

    // const findAppointment = this.appointment.find(appointment => isEqual(appointment.date,
    //   date));
    //

    const findAppointment = await this.findOne({
      where: { date }
    })

    return findAppointment || null;
  }

}

export default AppointmentsRepository;
