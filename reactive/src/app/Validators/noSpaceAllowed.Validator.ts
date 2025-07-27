import { FormControl } from '@angular/forms';

export const nospaceAllowed = (controls: FormControl) => {
  if (controls.value != null && controls.value.indexOf(' ') != -1) {
    return { spaceAllowed: true };
  }
  return null;
};


