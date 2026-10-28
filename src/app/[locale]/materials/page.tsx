import { FEATURE_VELA_ENABLED } from '@/lib/features';
import GenesiMaterials from './GenesiMaterials';
import VelaMaterialsClient from './VelaMaterialsClient';

export default async function MaterialsPage() {
  if (FEATURE_VELA_ENABLED) {
    return <VelaMaterialsClient />;
  }

  return <GenesiMaterials />;
}
