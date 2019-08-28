class Goods {
    constructor() {
        this.x = Math.random() * innerWidth;
        this.y = Math.random() * innerHeight;
        this.switch = 0;
        this.goodsPrice = 30;
    };

    setup() {
        ellipseMode(RADIUS);
        this.width = random(100);
        this.Height = random(60);
        // Set the starting position of the shape

    };

    draw() {
        //color goods
        fill(0, 0, random(25));
        fill(0, 0, random(255));
        ellipse(this.x, this.y, random(60,100), random(40,110));

        //motion (random)
        this.y -= random(7, -7);
        if (this.y <= 1) {
            this.y = innerHeight;
        }
        this.x += random(30, -30);

        // if (this.x <= 0 || this.x >= innerWidth) {
        //     this.x = innerWidth;
        // }

    };

}

class GoodsGreen extends Goods {
    constructor() {
        super();
        super.setup();
        this.goodsPrice = 50;
    }

    draw() {
        //color goods
        fill(random(25), 255, 0);
        fill(0, 255, random(255));
        ellipse(this.x, this.y, random(60,100), random(50,120));

        //motion (random)
        this.y -= random(7, -7);
        if (this.y <= 1) {
            this.y = innerHeight;
        }
        this.x += random(30, -30);

    }

}

class GoodsRed extends Goods {
    constructor() {
        super();
        super.setup();
        this.goodsPrice = 120;
    }

    draw() {

        //color goods
        fill(255, random(255), 0);
        fill(255, 0, random(255));
        ellipse(this.x, this.y, random(60, 100), random(60, 130));

        //motion (random)
        this.y -= random(7, -7);
        if (this.y <= 1) {
            this.y = innerHeight;
        }
        this.x += random(10, -30);

    }

}