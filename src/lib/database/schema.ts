import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuarios = sqliteTable("Usuarios", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombreUsuario: text("nombre_usuario").notNull(),
	correoElectronico: text("correo_electronico").notNull(),
	"contraseña": text("contraseña").notNull(),
	fechaNacimiento: text("fecha_nacimiento"),
	sexo: text("sexo"),
});

export const historias = sqliteTable("Historias", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	titulo: text("titulo").notNull(),
	idAutor: integer("id_autor"),
	fechaCreacion: text("fecha_creacion"),
});

export const genero = sqliteTable("Genero", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombre: text("nombre").notNull(),
});

export const opiniones = sqliteTable("Opiniones", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	likes: integer("likes").notNull(),
	"reseseña": text("reseseña "),
	libroLeido: text("libro_leido ").notNull(),
	autor: text("autor ").notNull(),
});