import Link from 'next/link';
import RegisterForm from './RegisterForm';

export const metadata = { title: 'Morpheus | Register' };

export default function page() {
  return (
    <div className=''>
      <h1>
        Join <span>:Morpheus</span>
      </h1>

      <RegisterForm />

      <p>
        Already have an account? <Link href='/login'>Login</Link>
      </p>
    </div>
  );
}
