export interface mainData {
  nome?: string;
  descricao?: string;
  logo_escura?: string;
  logo_clara?: string;
  email?: string;
  telefone?: string;
  whatsapp?: string;
  endereco?: string;
  numero_cro?: number;
  responsavel_tecnico?: string;
}

const apiUrl = import.meta.env.PUBLIC_DIRECTUS_INTERNAL_URL; // usado no fetch (INTERNAMENTE no SSR)
const assetsUrl = import.meta.env.PUBLIC_DIRECTUS_EXTERNAL_URL; // usado nas imagens (EXTERNAMENTE no navegador)

export class DirectusError extends Error {
  constructor(
    message: string,
    public status?: number,
    public url?: string,
  ) {
    super(message);
    this.name = 'DirectusError';
  }
}

export async function getMainData(): Promise<mainData | null> {
  try {
    const url = `${apiUrl}/items/clinicData`;
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new DirectusError(
        `Erro ao buscar os dados da clínica: ${res.statusText}`,
        res.status,
        url,
      );
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
      return null;
    }

    const item = json.data[0];

    const mappedMainData: mainData = {
      nome: item.nome,
      numero_cro: item.numero_cro,
      responsavel_tecnico: item.responsavel_tecnico,
      telefone: item.telefone,
      whatsapp: item.whatsapp,
      email: item.email,
      endereco: item.endereco,
      descricao: item.descricao,
      logo_escura: item.logo_escura
        ? `${assetsUrl}/assets/${item.logo_escura}`
        : '/images/placeholder-logo.jpg',
      logo_clara: item.logo_clara
        ? `${assetsUrl}/assets/${item.logo_clara}`
        : '/images/placeholder-logo.jpg',
    };
    return mappedMainData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getMainDataPublic(): Promise<mainData | null> {
  try {
    const url = `${assetsUrl}/items/clinicData`;
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new DirectusError(
        `Erro ao buscar os dados da clínica: ${res.statusText}`,
        res.status,
        url,
      );
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
      return null;
    }

    const item = json.data[0];

    const mappedMainData: mainData = {
      logo_escura: item.logo_escura
        ? `${assetsUrl}/assets/${item.logo_escura}`
        : '/images/placeholder-logo.jpg',
      logo_clara: item.logo_clara
        ? `${assetsUrl}/assets/${item.logo_clara}`
        : '/images/placeholder-logo.jpg',
    };
    return mappedMainData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
