import * as Yup from 'yup';

export const validationSchemaPage1 = Yup.object().shape({
    P1: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P2: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P3: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P4: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P5: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P6: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
});

export const validationSchemaPage2 = Yup.object().shape({
  P7: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P8: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P9: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P10: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(
          Yup.string().required('Campo obligatorio')
          .notOneOf([""], "Seleccionar una Opción válida")
          .notOneOf(["No"], "Debe aceptar si desea continuar la encuesta")
        )
      })
    )
  }),
  P11: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P12: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});

export const validationSchemaPage3 = Yup.object().shape({
  P13: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P14: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P15: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});
export const validationSchemaPage4 = Yup.object().shape({
  P16a: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16b: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16c: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16d: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage5 = Yup.object().shape({
  P16e: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16f: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16g: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16h: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage6 = Yup.object().shape({
  P18a: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18b: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18c: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18d: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18e: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage7 = Yup.object().shape({
  P18f: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18g: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18h: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18i: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18j: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage8 = Yup.object().shape({
  P18k: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18l: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18m: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18n: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18o: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","18"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage9 = Yup.object().shape({
  P24: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              idoptresponse: Yup.string(), // No obligatorio
              responseuser: Yup.string(), // Puede ser opcional
              subQuestion1Responses: Yup.object().shape({
                  P25: Yup.string(), // Puede ser opcional
                  P26: Yup.string(), // Puede ser opcional
              }),
          })
      ),
  }),
  P27: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P28: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P29: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
});
export const validationSchemaPage10 = Yup.object().shape({
  A1: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('Este campo es obligatorio'))
          })
      )
  }),
  A2: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La fecha es obligatoria'))
          })
      )
  }),
  A3: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La hora de inicio es obligatoria'))
          })
      )
  }),
  A4: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La hora de finalización es obligatoria'))
          })
      )
  }),
  A5: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('Selecciona una opción'))
          })
      )
  }),
});