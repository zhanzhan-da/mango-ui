# mango-ui 前端 UI 框架

[![Build Status](https://travis-ci.org/zhanzhan-da/mango-ui.svg?branch=master)](https://travis-ci.org/zhanzhan-da/mango-ui)

## 介绍

使用 vue 做的 UI 框架

## 开始使用

1.添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box

    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    IE8 及以上浏览器都支持此样式

    你还需要设置默认颜色等变量 （后续会改为 SCSS 变量）

    ```
    html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #999;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE 15 及以上浏览器都支持此样式

2.安装
`npm i --save mangoing-ui`

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
