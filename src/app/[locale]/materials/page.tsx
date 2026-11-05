import { FEATURE_VELA_ENABLED, FEATURE_VELA_UNDER_DEVELOPMENT } from '@/lib/features';
import GenesiMaterials from './GenesiMaterials';
import VelaMaterialsClient from './VelaMaterialsClient';

export default async function MaterialsPage() {
  if (FEATURE_VELA_ENABLED && !FEATURE_VELA_UNDER_DEVELOPMENT) {
    return <VelaMaterialsClient />;
  }

  return <GenesiMaterials />;
}
