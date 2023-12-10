function initializeFormValidation(formId) {
    $(formId).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone is required",
        }
      }
    });
  }