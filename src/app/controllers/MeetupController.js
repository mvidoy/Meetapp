import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
    });
    return res.json(meetups);
  }

  async store(req, res) {
    const scheme = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      file_id: Yup.number().required(),
      date: Yup.date().required(),
    });
    if (!(await scheme.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check date is not from the past
    const hourStart = startOfHour(parseISO(req.body.date));

    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Meetup past date are not permitted' });
    }
    const user_id = req.userId;
    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const scheme = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      file_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await scheme.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    // check date is not from the past
    const hourStart = startOfHour(parseISO(req.body.date));

    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Meetup past date are not permitted' });
    }

    const { id_meetup } = req.params;

    if (!Number(id_meetup)) {
      return res.status(400).json({ error: 'Id Meetup found' });
    }

    const meetup = await Meetup.findByPk(id_meetup);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({ error: 'Not authorized.' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't update past meetups." });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const { id_meetup } = req.params;

    if (!Number(id_meetup)) {
      return res.status(400).json({ error: 'Id Meetup found' });
    }

    const meetup = await Meetup.findByPk(id_meetup);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({ error: 'Not authorized.' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't delete past meetups." });
    }
    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
