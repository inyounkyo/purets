interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

interface Story {
  createStory(): void;
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  createStory(): void {
    console.log("Story was created");
  }
}

let story = new Youtube("DD", "CC", 33);
story.createStory();
