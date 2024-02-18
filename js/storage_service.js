'use strict'

function saveToStorage(key, value) {
    const valueStr = JSON.stringify(value)
    localStorage.setItem(key, valueStr)
}

function loadFromStorage(key) {
    const valueStr = localStorage.getItem(key)
    //  if(!valueStr)return null
    return JSON.parse(valueStr)
}