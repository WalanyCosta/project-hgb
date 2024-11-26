import { Hashed } from 'application/protocols';
import bcrypt from 'bcrypt';

export class BcryptAdapter implements Hashed {
	private readonly salt: number;
	constructor() {
		this.salt = parseInt(process.env.BCRYPT_SALT ?? '10');
	}

	async hash(value: string): Promise<string> {
		return await bcrypt.hash(value, this.salt);
	}
}
