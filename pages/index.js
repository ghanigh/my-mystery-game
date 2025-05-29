import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenue dans le Jeu d'Enquête !</h1>
      <p>Êtes-vous prêt à résoudre le mystère ?</p>
      <Link href="/scene/scene-1" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Commencer l'enquête
      </Link>
    </div>
  );
}