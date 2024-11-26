export interface MailProvider {
	sendEmail(to: string, title: string, htmlContent: string): Promise<void>;
}
