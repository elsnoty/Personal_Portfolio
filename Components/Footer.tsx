import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Mostafa Shawky</h2>
          <p className="text-gray-400">Front-End Developer</p>
          <div className="mt-4">
            <p>Email: <a href="mailto:mostafashawky399@gmail.com" className="hover:underline">mostafashawky399@gmail.com</a></p>
            <p>Location: Giza, Egypt</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Connect with Me</h3>
          <ul className="mt-4 flex space-x-4">
            <li><a href="https://github.com/elsnoty" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mostafa-shawky" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-600">
        <p>© 2024 Mostafa Shawky. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
