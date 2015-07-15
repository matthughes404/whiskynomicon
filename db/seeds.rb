# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).


# brands and variants
Brand.create({ name: "Basil Hayden's",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: "Buffalo Trace",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: "Early Times",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: "Evan Williams",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: "Four Roses",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 }),
    Variant.create({ name: "Single Barrel", style: 'Bourbon', proof: 100 }),
    Variant.create({ name: "Small Batch", style: 'Bourbon', proof: 90 }),
  ]})
Brand.create({ name: "George Dickel",
  variants: [
    Variant.create({ name: "Old No. 8", style: 'Tenessee whiskey', proof: 80 }),
    Variant.create({ name: "Superior No. 12", style: 'Tenessee whiskey', proof: 90 }),
    Variant.create({ name: "Barrel Select", style: 'Tenessee whiskey', proof: 86 }),
    Variant.create({ name: "Cascade Hollow", style: 'Tenessee whiskey', proof: 80 })
  ]})
Brand.create({ name: "Jack Daniels",
  variants: [
    Variant.create({ name: "Old No. 7", style: 'Tenessee whiskey', proof: 80 }),
    Variant.create({ name: "Gentleman Jack", style: 'Tenessee whiskey', proof: 80 }),
  ]})
Brand.create({ name: "Jim Bean",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 }),
    Variant.create({ name: "Black", style: 'Bourbon', proof: 86 }),
    Variant.create({ name: "Rye", style: 'Rye', proof: 80 }),
  ]})
Brand.create({ name: "Kentucky Gentleman",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: "Knob Creek",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 100 }),
    Variant.create({ name: "Single Barrel", style: 'Bourbon', proof: 120 }),
    Variant.create({ name: "Rye", style: 'Rye', proof: 100 }),
  ]})
Brand.create({ name: "Maker's Mark",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 90 }),
    Variant.create({ name: "Maker's 46", style: 'Bourbon', proof: 94 })
  ]})
Brand.create({ name: "Old Forester",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 86 }),
    Variant.create({ name: "Signature", style: 'Bourbon', proof: 100 })
  ]})
Brand.create({ name: "Old Granddad",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 86 }),
    Variant.create({ name: "114", style: 'Bourbon', proof: 114 }),
    Variant.create({ name: "Bonded", style: 'Bourbon', proof: 100 }),
  ]})
Brand.create({ name: "Wild Turkey",
  variants: [
    Variant.create({ name: "81 Proof", style: 'Bourbon', proof: 81 }),
    Variant.create({ name: "101 Proof", style: 'Bourbon', proof: 101 }),
    Variant.create({ name: "Rare Breed", style: 'Bourbon', proof: 108 }),
    Variant.create({ name: "Rye", style: 'Rye', proof: 81 }),
  ]})
Brand.create({ name: "Woodford Reserve",
  variants: [
    Variant.create({ style: 'Bourbon', proof: 90 })
  ]})


User.create({ username: 'GenBurnside', name:'Matt Hughes', email: 'matthughes.tech@gmail.com' })
Taste.create({ user_id: 1, brand: 'Buffalo Trace', variant: '', style: 'Bourbon', proof: 80,
  location: 'Home', rating: 4, review: 'Pretty tasty and affordable bourbon', date: DateTime.new(2015,7,13,18,0,0) })
Bottle.create({ user_id: 1, brand: 'Speyburn', variant: '10 yr', style: 'Single malt Scotch', proof: 80,
  purchase_location: 'Total Wine', rating: 3.5, review: "It's cheap!",
  purchase_date: DateTime.new(2015,7,1) })
