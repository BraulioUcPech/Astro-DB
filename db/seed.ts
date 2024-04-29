import { Category, db, User, Todo } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(User).values([
    { id: "1", email: "braulioalexson@gmail.com", username: "braulioalexson" },
    { id: "2", email: "rodrigo@gmail.com", username: "rodrigo" },
  ]);

  await db.insert(Category).values([
    { id: "1", label: "Personal" },
    { id: "2", label: "Work" },
  ]);

  await db.insert(Todo).values([
    {
      id: "1",
      title: "Buy milk",
      description: "Buy milk at the supermarket",
      user_id: "1",
      category_id: "1",
    },
    {
      id: "2",
      title: "Send email",
      description: "Send email to the team",
      user_id: "2",
      category_id: "2",
    },
  ]);
}
