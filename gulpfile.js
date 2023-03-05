// gulpプラグインの読み込み
const gulp = require('gulp');
const ejs = require('gulp-ejs'); //EJS
const rename = require('gulp-rename'); //ファイル出力時にファイル名を変える
 
const sass = require('gulp-dart-sass'); //sass
const postcss = require('gulp-postcss'); //生成されたcssを操作する
const autoprefixer = require('autoprefixer'); //自動でベンダープレフィックスを付与
const htmlbeautify = require("gulp-html-beautify"); //HTML生成後のコードを綺麗にする
 
const plumber = require("gulp-plumber"); //エラーによるタスクの強制停止を防止
const notify = require("gulp-notify"); //デスクトップ通知
const browserSync = require("browser-sync").create(); //変更を即座にブラウザへ反映
 
const fs = require('fs');//JSONファイル操作用
const del = require('del'); //データ削除用

const srcBase = './src';
const distBase = './dist';
 
const srcPath = {
  'scss': srcBase + '/scss/**/*.scss',
  'img': srcBase + '/img/**/*',
  'js': srcBase + '/js/**/*.js',
  'json': srcBase + '/**/*.json',
  'ejs': srcBase + '/**/*.ejs',
  '_ejs': '!' + srcBase + '/_inc/**/*.ejs',
 
};
const distPath = {
  'css': distBase + '/css',
  'html': distBase + '/**/*.html',
  'img': distBase + '/img',
  'js': distBase + '/js',
  'item': distBase + '/item',
};