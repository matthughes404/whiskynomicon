# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).


# brands and variants
# bourbon
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

# scotch
Brand.create({ name: "Ardmore",
  variants: [
    Variant.create({ name: "Legacy", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Traditional Cask", style: 'Single malt Scotch', proof: 92 })
  ]})
Brand.create({ name: "Balvenie",
  variants: [
    Variant.create({ name: "Double Wood 12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Single Barrel 12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Caribbean Cask 14yr", style: 'Single malt Scotch', proof: 80 }),
  ]})
Brand.create({ name: "Bowmore",
  variants: [
    Variant.create({ style: '12yr', proof: 80 })
  ]})
Brand.create({ name: "Bunnahabhain",
  variants: [
    Variant.create({ style: '12yr', proof: 92 }),
    Variant.create({ style: '18yr', proof: 92 })
  ]})
Brand.create({ name: "Cragganmore",
  variants: [
    Variant.create({ style: '12yr', proof: 80 })
  ]})
Brand.create({ name: "Glenfiddich",
  variants: [
    Variant.create({ name: "12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "15yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "18yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "21yr", style: 'Single malt Scotch', proof: 80 })
  ]})
Brand.create({ name: "Glenlivet",
  variants: [
    Variant.create({ name: "12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Nadurra 16yr", style: 'Single malt Scotch', proof: 96 }),
    Variant.create({ name: "18yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "21yr", style: 'Single malt Scotch', proof: 80 })
  ]})
Brand.create({ name: "Glenmorrangie",
  variants: [
    Variant.create({ name: "12yr", style: 'Single malt Scotch', proof: 80 })
  ]})
Brand.create({ name: "Highland Park",
  variants: [
    Variant.create({ name: "12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "18yr", style: 'Single malt Scotch', proof: 86 }),
    Variant.create({ name: "21yr", style: 'Single malt Scotch', proof: 91 })
  ]})
Brand.create({ name: "Isle of Jura",
  variants: [
    Variant.create({ name: "Origin 10yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Elixir 12yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Diurach's Own 16yr", style: 'Single malt Scotch', proof: 80 })
  ]})
Brand.create({ name: "Lagavulin",
  variants: [
    Variant.create({ name: "16yr", style: 'Single malt Scotch', proof: 80 })
  ]})
Brand.create({ name: "Laphroaig",
  variants: [
    Variant.create({ name: "10yr", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "Triple Wood", style: 'Single malt Scotch', proof: 96 }),
    Variant.create({ name: "18yr", style: 'Single malt Scotch', proof: 96 })
  ]})
Brand.create({ name: "Oban",
  variants: [
    Variant.create({ name: "14yr", style: 'Single malt Scotch', proof: 96 })
  ]})
Brand.create({ name: "Scapa",
  variants: [
    Variant.create({ name: "16yr", style: 'Single malt Scotch', proof: 96 })
  ]})
Brand.create({ name: "Speyburn",
  variants: [
    Variant.create({ name: "Bradan Orach", style: 'Single malt Scotch', proof: 80 }),
    Variant.create({ name: "10yr", style: 'Single malt Scotch', proof: 80 })
  ]})

# user, taste, and bottle
User.create({
  uid: 'GenBurnside',
  username: 'GenBurnside',
  provider: 'email',
  name:'Matt Hughes',
  email: 'matthughes.tech@gmail.com',
  password: 'asdfasdfasdf',
  password_confirmation: 'asdfasdfasdf'
})

Taste.create({ user_id: 1, brand: 'Buffalo Trace', variant: '', style: 'Bourbon', proof: 80,
  location: 'Home', rating: 4, review: 'Pretty tasty and affordable bourbon', date: DateTime.new(2015,7,13,18,0,0) })

Bottle.create({ user_id: 1, brand: 'Speyburn', variant: '10yr', style: 'Single malt Scotch', proof: 80,
  purchase_location: 'Total Wine', rating: 3, review: "It's cheap!",
  purchase_date: DateTime.new(2015,7,3) })
Bottle.create({ user_id: 1, brand: 'Oban', variant: '14yr', style: 'Single malt Scotch', proof: 96,
  purchase_location: 'Total Wine', rating: 4,
  purchase_date: DateTime.new(2015,8,1) })
Bottle.create({ user_id: 1, brand: 'Lagavulin', variant: '16yr', style: 'Single malt Scotch', proof: 80,
  purchase_location: 'Total Wine', rating: 4.5,
  purchase_date: DateTime.new(2015,8,15) })
Bottle.create({ user_id: 1, brand: 'Knob Creek', variant: '', style: 'Bourbon', proof: 80,
  purchase_location: 'Total Wine', rating: 3.5, review: "Tasty bourbon!",
  purchase_date: DateTime.new(2015,8,20,17,0,0) })

Activity.create({ user_id: 1, description: "had a sip of Speyburn 10yr at home", date: DateTime.new(2015,7,13,18,0,0),
  activity_type: "taste", detail_id: 1 })
Activity.create({ user_id: 1, description: "bought a bottle of Knob Creek at Total Wine", date: DateTime.new(2015,8,20,17,0,0),
  activity_type: "bottle", detail_id: 4 })
