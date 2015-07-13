# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create({ username: 'GenBurnside', name:'Matt Hughes', email: 'matthughes.tech@gmail.com' })
Taste.create({ user_id: 1, brand: 'Buffalo Trace', variant: 'Buffalo Trace', style: 'Bourbon', proof: 80,
  location: 'Home', rating: 4, review: 'Pretty tasty and affordable bourbon', date: DateTime.new(2015,7,13,18,0,0) })
Bottle.create({ user_id: 1, brand: 'Speyburn', variant: '10 yr', style: 'Single malt Scotch', proof: 80,
  purchase_location: 'Total Wine', rating: 3.5, review: "It's cheap!", 
  purchase_date: DateTime.new(2015,7,1) })

Brand.create({ name: 'Buffalo Trace',
  variants: [
    Variant.create({ name: 'Buffalo Trace', style: 'Bourbon', proof: 80 })
  ]})
Brand.create({ name: 'Jack Daniels', 
  variants: [
    Variant.create({ name: 'Old No. 7', style: 'Tenessee whiskey', proof: 80 }),
    Variant.create({ name: 'Gentleman Jack', style: 'Tenessee whiskey', proof: 80 }),
  ]})
Brand.create(name: 'Jim Beam')
Brand.create(name: 'Wild Turkey')

