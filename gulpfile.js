const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

// 🔹 Rutas de trabajo
const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
  images: "src/assets/images/**/*",
  html: "src/**/*.html",
  dest: "dist/",
};

// 🔹 Compilar estilos (Tailwind + SCSS)
function styles() {
  return gulp
    .src("src/scss/facturacion.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest));
}

// 🔹 Copiar scripts JS a /dist/js
function scripts() {
  return gulp.src(paths.js).pipe(gulp.dest("dist/js"));
}

// 🔹 Copiar imágenes a /dist/assets/images (manteniendo formato binario)
function images() {
  return gulp.src('src/assets/images/**/*', { encoding: false })
    .pipe(gulp.dest('dist/assets/images'));
}


// 🔹 Copiar archivos HTML a /dist
function html() {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist"));
}

// 🔹 Vigilar cambios en SCSS, JS, imágenes y HTML
function watchFiles() {
  gulp.watch(paths.scss, styles);
  gulp.watch(paths.js, scripts);
  gulp.watch(paths.images, images);
  gulp.watch(paths.html, html);
}

// 🔹 Tareas disponibles
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.watch = gulp.series(styles, scripts, images, html, watchFiles);

// 🔹 Tarea por defecto
exports.default = gulp.series(styles, scripts, images, html, watchFiles);
exports.build = gulp.series(styles, scripts, images, html);
