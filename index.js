// 导入所需的库和模块
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// 创建在线烹饪和食谱社区类
class OnlineCookingAndRecipeCommunity {
    constructor() {
        this.users = [];
        this.recipes = [];
        this.comments = [];
        this.likes = [];
        this.followers = [];
        this.tags = [];
    }

    // 注册用户
    registerUser(user) {
        this.users.push(user);
    }

    // 发布食谱
    publishRecipe(recipe) {
        this.recipes.push(recipe);
    }

    // 添加评论
    addComment(comment) {
        this.comments.push(comment);
    }

    // 点赞食谱
    likeRecipe(userId, recipeId) {
        this.likes.push({ userId, recipeId });
    }

    // 关注用户
    followUser(followerId, followingId) {
        this.followers.push({ followerId, followingId });
    }

    // 添加标签
    addTag(tag) {
        this.tags.push(tag);
    }

    // 搜索食谱
    searchRecipes(query) {
        return this.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
        );
    }
}

// 创建在线烹饪和食谱社区实例
const cookingCommunity = new OnlineCookingAndRecipeCommunity();

// 示例用法
const user1 = { id: uuidv4(), username: "chef1", email: "chef1@example.com" };
const user2 = { id: uuidv4(), username: "foodie2", email: "foodie2@example.com" };
const recipe1 = { id: uuidv4(), title: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese"] };
const recipe2 = { id: uuidv4(), title: "Chocolate Cake", ingredients: ["flour", "sugar", "cocoa powder", "butter", "eggs"] };
const comment1 = { userId: user1.id, recipeId: recipe1.id, content: "This recipe is amazing!" };
const comment2 = { userId: user2.id, recipeId: recipe2.id, content: "I can't wait to try this!" };

// 注册用户
cookingCommunity.registerUser(user1);
cookingCommunity.registerUser(user2);

// 发布食谱
cookingCommunity.publishRecipe(recipe1);
cookingCommunity.publishRecipe(recipe2);

// 添加评论
cookingCommunity.addComment(comment1);
cookingCommunity.addComment(comment2);

// 点赞食谱
cookingCommunity.likeRecipe(user1.id, recipe2.id);
cookingCommunity.likeRecipe(user2.id, recipe1.id);

// 关注用户
cookingCommunity.followUser(user1.id, user2.id);

// 添加标签
cookingCommunity.addTag("Italian");
cookingCommunity.addTag("Dessert");

// 搜索食谱
const query = "spaghetti";
const searchResults = cookingCommunity.searchRecipes(query);

// 打印搜索结果
console.log("Search results for query:", query);
console.log(searchResults);
