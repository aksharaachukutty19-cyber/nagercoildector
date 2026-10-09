// OWNER: add photos to public/images and append items here. Set placeholder:false once the photo is a real, authorised project photo.
export type Cat = 'stages' | 'mandap' | 'reception' | 'floral' | 'ceiling' | 'outdoor'
export const categories: { key: 'all' | Cat; label: string }[] = [
  { key: 'all', label: 'All Designs' }, { key: 'stages', label: 'Wedding Stages' }, { key: 'mandap', label: 'Mandap' },
  { key: 'reception', label: 'Reception' }, { key: 'floral', label: 'Floral Decor' }, { key: 'ceiling', label: 'Ceiling Decor' }, { key: 'outdoor', label: 'Outdoor Weddings' }]
export interface Item { id: string; src: string; alt: string; cat: Cat; placeholder: boolean }
const mk = (id: string, cat: Cat, alt: string): Item => ({ id, src: `/images/${id}.webp`, alt, cat, placeholder: true })
export const gallery: Item[] = [
  mk('stage-1', 'stages', 'White and gold floral wedding stage with chandeliers'),
  mk('stage-2', 'stages', 'Traditional Indian wedding stage backdrop'),
  mk('mandap-1', 'mandap', 'Floral mandap with draped fabric and pillars'),
  mk('mandap-2', 'mandap', 'Contemporary mandap with white florals'),
  mk('reception-1', 'reception', 'Reception hall with dramatic backdrop and seating'),
  mk('reception-2', 'reception', 'Reception stage with warm chandelier lighting'),
  mk('floral-1', 'floral', 'Floral arch with roses and greenery'),
  mk('floral-2', 'floral', 'Aisle styled with flowers and lanterns'),
  mk('ceiling-1', 'ceiling', 'Draped fabric ceiling with a chandelier'),
  mk('ceiling-2', 'ceiling', 'Canopy ceiling styling over a wedding hall'),
  mk('outdoor-1', 'outdoor', 'Garden wedding ceremony with floral structure'),
  mk('outdoor-2', 'outdoor', 'Outdoor aisle surrounded by greenery'),
]
