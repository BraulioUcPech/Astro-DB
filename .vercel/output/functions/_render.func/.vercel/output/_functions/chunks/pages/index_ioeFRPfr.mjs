/* empty css                          */
import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, k as renderComponent, m as maybeRenderHead } from '../astro_BTUtCgIL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/layouts/Layout.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } }, "username": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "username", "collection": "User", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Todo = asDrizzleTable("Todo", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Todo", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Todo", "primaryKey": false, "optional": false } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Todo", "primaryKey": false, "optional": false } }, "user_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "user_id", "collection": "Todo", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } }, "category_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "category_id", "collection": "Todo", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Category", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
const Category = asDrizzleTable("Category", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Category", "primaryKey": true } }, "label": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "label", "collection": "Category", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const category_id = formData.get("category_id");
    console.log({ title, description, category_id });
    if (typeof title === "string" && typeof description === "string" && typeof category_id === "string") {
      await db.insert(Todo).values({
        title,
        description,
        category_id,
        user_id: "1"
      });
    }
  }
  const categorias = await db.select().from(Category);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create TODO" })} ${maybeRenderHead()}<div class="min-h-screen bg-gray-100 flex items-center justify-center"> <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"> <h2 class="text-2xl font-bold mb-6 text-gray-800">Crear Tarea</h2> <form method="post"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
Título
</label> <input type="text" id="title" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Introduce un título"> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
Descripción
</label> <textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" placeholder="Descripción de la tarea"></textarea> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="category_id">
Categoría
</label> <select id="category_id" name="category_id" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"> ${categorias.map((category) => renderTemplate`<option${addAttribute(category.id, "value")}>${category.label}</option>`)} </select> </div> <div class="flex items-center justify-between"> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Crear
</button> </div> </form> </div> </div>`;
}, "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/pages/createtodo/index.astro", void 0);

const $$file$1 = "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/pages/createtodo/index.astro";
const $$url$1 = "/createtodo";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const todos = await db.select().from(Todo).innerJoin(User, eq(Todo.user_id, User.id)).innerJoin(Category, eq(Todo.category_id, Category.id));
  return renderTemplate`${todos.map(
    (todo) => renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5><a href="#" data-astro-cid-dohjnao5><h2 data-astro-cid-dohjnao5>${todo.Todo.title}</h2><p data-astro-cid-dohjnao5>${todo.Category.label}</p><p data-astro-cid-dohjnao5>${todo.Todo.description}</p><p data-astro-cid-dohjnao5>${todo.User.username}</p></a></li>`
  )}`;
}, "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path> <defs data-astro-cid-j7pv25f6> <linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6> <stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop> <stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop> </linearGradient> </defs> </svg> <h1 data-astro-cid-j7pv25f6>Usuarios <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1> <p class="instructions" data-astro-cid-j7pv25f6></p> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "title": "Card Title", "category": "Card Category", "description": "Card Description", "creador": "Card Creator", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/pages/index.astro", void 0);

const $$file = "C:/Users/braul/OneDrive/Documents/Programacion/Astro-DB/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
