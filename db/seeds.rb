Cereal.all.destroy_all

cereal_seeds = [
  {
    name: "Cap'n Crunch",
    description: "Oh god, the roof of my mouth is bleeding!"
  },
  {
    name: "Cinnamon Toast Crunch",
    description: "Wendel's secret recipe."
  },
  {
    name: "Coco Puffs",
    description: "Chocolately goodness"
  },
  {
    name: "Cookie Crisp",
    description: "Cookies? For Breakfast?!"
  },
  {
    name: "Lucky Charms",
    description: "Candy? For Breakfast?!"
  }
]

cereal_seeds.each do |seed|
  Cereal.create(seed)
end