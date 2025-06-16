// src/lib/directus/getHomePageData.ts

import { getHeroData } from './hero_section';
import { getAboutUsData } from './about_us_section';
import { getCounterItems } from './counter_section';
import { getGalleryData } from './gallery_section';
import { getLocalizationData } from './location_section';
import { getTestimonialsData } from './testimonials_section';
import { getContactCTAData } from './cta_section';
import { getBlogPosts } from '../blogData';

export async function getHomePageData() {
  try {
    const [
      heroData,
      aboutUsData,
      counterSection,
      galleryData,
      locationData,
      testimonialsData,
      contactCTAData,
      blogPosts,
    ] = await Promise.all([
      getHeroData(),
      getAboutUsData(),
      getCounterItems(),
      getGalleryData(),
      getLocalizationData(),
      getTestimonialsData(),
      getContactCTAData(),
      // Corrigindo a chamada do getBlogPosts - removendo a sintaxe JSX incorreta
      getBlogPosts(),
    ]);

    return {
      heroData,
      aboutUsData,
      counterSection,
      galleryData,
      locationData,
      testimonialsData,
      contactCTAData,
      blogPosts,
    };
  } catch (error) {
    console.error('Erro ao buscar dados da home page:', error);
    throw error;
  }
}
