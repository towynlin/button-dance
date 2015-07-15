# Product Web App

Example web app by an organization building a product on the Particle platform.

Let's figure out why there's a web app; what does it do?

The device should both publish data and expose functions.

The published data could be a button on the product or a motion sensor.

The function could make the device light up.

The lighting up should be done based on data gathered by the web app.
This means that the device could not decide when to light up totally on its own.

This product could be built on the Internet Button.

Each customer of the device sets up her account to receive
GitHub pull request webhooks
Charitable giving?

Why do you hit the buttons?
Why does it light up?
What do the different colors mean?
Could constantly raise the bar, like CleverPet

Button 1-4 is choice, can only choose once per hour.
Must have done something since last button press,
like friends must have pressed, or tweet or github push or...

If you and a friend make the same choice... ?

---

button.dance

Your company and product are called Button Dance.

People buy a Button Dance, and when it arrives they go to button.dance
to sign up and set up their Button Dance.

Button Dance is a social game.

animals: snake, bird, dog, cat
pushing button posts a random animal pic
but only if you've achieved some karma
and no more than once every 5 minutes

you get karma when liking other people's animal pics
or when other people like yours

When you like someone else's animal, they get 5 karma, and you get 1.
You can't like your own animals.
When someone likes one of your animals,
your button dances rainbows for 5 seconds.

Each new user starts with 3 points so they can post a picture of a dog, bird or snake. But not a cat. Because cats are rare.

Each animal requires different amounts of karma to post:

- snake: 1
- bird: 2
- dog: 3
- cat: 4

The website displays the high score list.

the lights indicate which animal you have enough karma to post

accelerometer turns on lights
they fade out after a minute

web app routes:
- list high scores: GET /scores
- list animals:     GET /animals
- like an animal:   POST /animals/:id/like
- post an animal:   POST /animals   (must come from Particle webhook)
- sign up?
- login?

device publishes an event when button pushed
which triggers a webhook to post an animal

functions exposed:
- set karma
- dance rainbows
