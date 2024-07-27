export function validateString(value: string, regex: RegExp): boolean {
  return regex.test(value);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validateString(email, emailRegex);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return validateString(phoneNumber, phoneRegex);
}

export function validateNumber(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

export function validateDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return validateString(dateString, dateRegex);
}

export function validateRating(rating: number, min: number, max: number): boolean {
  return validateNumber(rating, min, max);
}

