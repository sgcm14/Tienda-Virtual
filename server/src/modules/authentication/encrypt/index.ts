import * as bcrypt from 'bcrypt';

class Encriptor {
  async encrypt(text: string): Promise<string> {
    const hash = await bcrypt.hash(text, 10);
    return hash;
  }

  async compare(text: string, hashed: string): Promise<boolean> {
    const isPasswordMatching = await bcrypt.compare(text, hashed);
    return isPasswordMatching;
  }
}

const encriptor = new Encriptor();

export default encriptor;
