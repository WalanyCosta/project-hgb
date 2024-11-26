import { MailProvider } from 'application/protocols/provider/mail-provider';
import nodemailer from 'nodemailer';
import configMailer from './config';

export class NodeMailerAdapter implements MailProvider {
	private readonly transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: configMailer.host,
			port: parseInt(configMailer.port.toString()),
			secure: configMailer.secure,
			auth: {
				user: configMailer.auth.user,
				pass: configMailer.auth.pass,
			},
		});
	}

	async sendEmail(
		to: string,
		title: string,
		htmlContent: string,
	): Promise<void> {
		await this.transporter.sendMail({
			from: {
				name: 'Marta.tech',
				address: 'walanybnegro@gmail.com',
			},
			to: to,
			subject: title,
			text: 'context fixed',
			html: htmlContent,
		});
	}
}
