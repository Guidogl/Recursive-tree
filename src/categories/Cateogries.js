import React from 'react'
import './Categories.css'

function Categories() {
  function TreeNode(name, level, children) {
    this.name = name
    this.level = level
    this.children = children
  }
  var levels = 4
  var tree = new TreeNode('root', 0, [])

  function generateArbitraryLevels(parent, levelsRemaining) {
    var tempIndex = 0
    // last level
    if (levelsRemaining === 0) return

    var currentLevel = parent.level + 1

    parent.children.push(
      new TreeNode('Category_' + tempIndex++, currentLevel, [])
    )
    generateArbitraryLevels(parent.children[0], levelsRemaining - 1)

    parent.children.push(
      new TreeNode('Category_' + tempIndex++, currentLevel, [])
    )
    generateArbitraryLevels(parent.children[1], levelsRemaining - 1)

    parent.children.push(
      new TreeNode('Category_' + tempIndex++, currentLevel, [])
    )
    generateArbitraryLevels(parent.children[2], levelsRemaining - 1)
  }

  generateArbitraryLevels(tree, levels)
  console.log(tree.children)

  return (
    <div className='categories'>
      {tree.children.map((categories, i) => (
        <div key={i} className='categories'>
          <div key={i}>{categories.name}</div>
          {categories.children.map((subCategories, i) => (
            <div key={i} className='sub-categories'>
              {subCategories.name}
              {subCategories.children.map((sub2Categories, i) => (
                <div key={i} className='sub2-categories'>
                  {sub2Categories.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Categories
