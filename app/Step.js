export class Step {
   constructor(images) {
      this.images = images;
      this.lastStep = this.images.length;
      this.activeStep = 0;
      this.isEnd = false;
   }

   setActiveStep() {
      this.images.forEach((image) => image.classList.remove("active"));
      this.images[this.activeStep].classList.add("active");
      this.activeStep++;
      if (this.activeStep === this.lastStep) return (this.isEnd = true);
   }
}
