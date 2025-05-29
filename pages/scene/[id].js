// pages/scene/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSceneById } from '../../data/scenes';
import SceneDisplay from '../../components/SceneDisplay';
import Link from 'next/link';

export default function ScenePage() {
  const router = useRouter();
  const { id } = router.query;
  const [scene, setScene] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchedScene = getSceneById(id);
      setScene(fetchedScene);
    }
  }, [id]);

  if (!scene) {
    return <p>Chargement de la scène...</p>;
  }

  return (
    <div>
      <SceneDisplay scene={scene} />
      {scene.nextScene && (
        <Link href={`/scene/${scene.nextScene}`}>
          <button>Suivant</button>
        </Link>
      )}
    </div>
  );
}
