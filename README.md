**Match Game**

### Refer to the video below:

<br/>
<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/match-game-output.mp4" type="video/mp4">
  </video>
</div>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/match-game-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Match Game](https://assets.ccbp.in/frontend/content/react-js/match-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>


<details>
<summary>Functionality added</summary>
<br/>
- Initially,
  - Score will be `0` and time will be `60` sec
  - The image to be matched will have the src attribute value as the value of the key `imageUrl` from the first object in **imagesList** provided
  - The **Fruits** tab will be active and the thumbnails with **FRUIT** as their category will be displayed
- The timer will start running backwards from the `60` sec
- When a tab is clicked, then the thumbnails in the corresponding category will be displayed
- When a thumbnail is clicked, if that is matched with the image to be matched,
  - Score is incremented by one
  - The new image to be matched will be generated randomly among the value of the key `imageUrl` from **imagesList** provided
- When a thumbnail is clicked, if it is not matched with the image to be matched,
  - The game will end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view will be displayed
  - When **PLAY AGAIN** button is clicked, then we will be able to play the game again
    - The score and time values will be reset to `0` and `60` sec respectively
    - The image to be matched will reset to the value of the key `imageUrl` from the first object in **imagesList** provided
    - The active tab will reset to **Fruits**, and the thumbnails with **FRUIT** as their category will be displayed
- When the timer reached `0` sec, then the game will end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view will be displayed
- The App is provided with `tabsList`. It consists of a list of tabItem objects with the following properties in each tabItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |    tabId    |  String   |
  | displayText |  String   |

- The App is provided with `imagesList`. It consists of a list of imageItem objects with the following properties in each imageItem object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  String   |
  |   imageUrl   |  String   |
  | thumbnailUrl |  String   |
  |   category   |  String   |

</details>



### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/match-game-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png](https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png) alt will be **website logo**
- [https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png](https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png) alt will be **timer**
- [https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png](https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png) alt will be **reset**
- [https://assets.ccbp.in/frontend/react-js/match-game-trophy.png](https://assets.ccbp.in/frontend/react-js/match-game-trophy.png) alt will be **trophy**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color:#2c0e3a; width: 150px; padding: 10px; color: white">Hex: #2c0e3a</div>
<div style="background-color:#ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color:#fec653; width: 150px; padding: 10px; color: black">Hex: #fec653</div>
<div style="background-color:#cf60c8; width: 150px; padding: 10px; color: black">Hex: #cf60c8</div>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

