# Button Dance

Your company and product are called Button Dance.

People buy a Button Dance, and when it arrives they go to
http://button.dance/
to sign up and set up their Button Dance.

Button Dance is a social game.

The two actions you can take are:

- push a button to post a random animal pic
- like someone else's animal pic

Each animal requires a different number of points to post:

- snake: 1
- bird: 2
- dog: 3
- cat: 4

Each new user starts with 3 points so she can post
a picture of a dog, bird, or snake.
But not a cat. Because cats are rare and special.

Each user can post no more than once every 5 minutes.

You gain points when liking other people's animal
or when other people like yours.
You can't like your own animal pics.

When you like someone else's animal, they get 5 points, and you get 1 point.

When someone likes one of your animals,
your button dances rainbows for 5 seconds.

The website displays the high score list.

The lights indicate which animals you have enough points to post:

- snake: green
- bird: blue
- dog: red
- cat: white

There are four buttons under the four corners.
Push down on the color of the animal you want to post.

If the lights are off, just pick up or bump the button.
Its accelerometer turns on the lights to show which animals you can post.
They fade out after 10 seconds.

Web app routes:

- list high scores: GET /scores
- list animals:     GET /animals
- post an animal:   POST /animals   (must come from Particle webhook)
- like an animal:   POST /likes
- sign up?
- login?

Device publishes an event when button pushed
which triggers a webhook to post an animal

Functions exposed:

- set karma
- dance rainbows
