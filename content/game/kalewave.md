---
title: Kalewave
shortDescription: Platformer in syntwave setting
creationDate: 2023-01-01T08:04:05.131Z
gameLink: https://kreivi.itch.io/kalewave
---
Realizing I had never done a platformer before, I wanted to make one. It was interesting to read and implement different detailed mechanisms (such as coyote time, input buffering, etc.) that go into making a two-dimensional platformer. I tried to create the character and its movement as reusable and configurable as possible by separating the functionality into an addon for [Godot Engine](https://godotengine.org).

I started the development with version 4.0 beta (can't quite recall which beta was available at the time) of the engine and had to evolve the project as the engine developed, so there was a lot of refactoring related to that.

The game theme struck me mid-project as I listened to a lot of synthwave music during development and started to read [Kalevala](https://en.wikipedia.org/wiki/Kalevala) as well. The game name is a mashup of the two themes... obviously.

The game does not have many levels, and without any threats, there’s no risk involved in gameplay, which honestly leaves the game feeling a little boring. I did want to introduce simple puzzle mechanisms to add some other challenge than just level navigation and timing the jumps correctly. Combining colors to allow passing through areas was an idea I had earlier in another prototype, which never came to be, so I implemented that idea into this game. I realize it’s not accessible at all to have a mechanism that relies purely on colors, so I created simple shapes to help distinguish between red, green, and blue colors. It’s still not the best, but it’s better than relying purely on just the colors.

All in all, it was a pretty fun project, but it took me _way_ longer than I anticipated. It goes to show that as a hobbyist solo developer with very limited free time, you need to keep ideas compact and accept the fact that it takes a long time to make even relatively simple games.