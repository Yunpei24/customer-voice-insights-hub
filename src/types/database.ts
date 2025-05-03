
// Types pour la base de données Supabase
// Ces types serviront de modèles pour créer les tables dans Supabase

export interface Client {
  id: string;
  created_at: string;
  email: string;
  nom: string;
  prenom: string;
  telephone: string;
  adresse?: string;
  ville?: string;
  code_client?: string;
  avatar_url?: string;
}

export interface Avis {
  id: string;
  created_at: string;
  client_id: string;
  type_service: 'facturation' | 'technique' | 'commercial' | 'autre';
  note: number; // 1-5
  contenu: string;
  statut: 'en_attente' | 'en_cours' | 'resolu' | 'clos';
  reponse?: string;
  repondu_par?: string;
  repondu_le?: string;
}

export interface Annonce {
  id: string;
  created_at: string;
  titre: string;
  contenu: string;
  type: 'maintenance' | 'information' | 'urgence' | 'promotion';
  date_debut: string;
  date_fin?: string;
  zones_concernees?: string[];
  image_url?: string;
  publie: boolean;
}

// Type pour le contexte d'authentification
export interface AuthContextType {
  isAuthenticated: boolean;
  user: Client | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<Client, 'id' | 'created_at'>) => Promise<void>;
  logout: () => Promise<void>;
}
