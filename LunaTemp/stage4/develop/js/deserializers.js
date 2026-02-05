var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.JointSpring' )
  var i981 = data
  i980.spring = i981[0]
  i980.damper = i981[1]
  i980.targetPosition = i981[2]
  return i980
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.JointMotor' )
  var i983 = data
  i982.m_TargetVelocity = i983[0]
  i982.m_Force = i983[1]
  i982.m_FreeSpin = i983[2]
  return i982
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.JointLimits' )
  var i985 = data
  i984.m_Min = i985[0]
  i984.m_Max = i985[1]
  i984.m_Bounciness = i985[2]
  i984.m_BounceMinVelocity = i985[3]
  i984.m_ContactDistance = i985[4]
  i984.minBounce = i985[5]
  i984.maxBounce = i985[6]
  return i984
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.JointDrive' )
  var i987 = data
  i986.m_PositionSpring = i987[0]
  i986.m_PositionDamper = i987[1]
  i986.m_MaximumForce = i987[2]
  i986.m_UseAcceleration = i987[3]
  return i986
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i989 = data
  i988.m_Spring = i989[0]
  i988.m_Damper = i989[1]
  return i988
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i991 = data
  i990.m_Limit = i991[0]
  i990.m_Bounciness = i991[1]
  i990.m_ContactDistance = i991[2]
  return i990
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i993 = data
  i992.m_ExtremumSlip = i993[0]
  i992.m_ExtremumValue = i993[1]
  i992.m_AsymptoteSlip = i993[2]
  i992.m_AsymptoteValue = i993[3]
  i992.m_Stiffness = i993[4]
  return i992
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i995 = data
  i994.m_LowerAngle = i995[0]
  i994.m_UpperAngle = i995[1]
  return i994
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i997 = data
  i996.m_MotorSpeed = i997[0]
  i996.m_MaximumMotorTorque = i997[1]
  return i996
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i999 = data
  i998.m_DampingRatio = i999[0]
  i998.m_Frequency = i999[1]
  i998.m_Angle = i999[2]
  return i998
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1001 = data
  i1000.m_LowerTranslation = i1001[0]
  i1000.m_UpperTranslation = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.index = i1003[1]
  i1002.startup = !!i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1005 = data
  i1004.aspect = i1005[0]
  i1004.orthographic = !!i1005[1]
  i1004.orthographicSize = i1005[2]
  i1004.backgroundColor = new pc.Color(i1005[3], i1005[4], i1005[5], i1005[6])
  i1004.nearClipPlane = i1005[7]
  i1004.farClipPlane = i1005[8]
  i1004.fieldOfView = i1005[9]
  i1004.depth = i1005[10]
  i1004.clearFlags = i1005[11]
  i1004.cullingMask = i1005[12]
  i1004.rect = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'targetTexture')
  i1004.usePhysicalProperties = !!i1005[16]
  i1004.focalLength = i1005[17]
  i1004.sensorSize = new pc.Vec2( i1005[18], i1005[19] )
  i1004.lensShift = new pc.Vec2( i1005[20], i1005[21] )
  i1004.gateFit = i1005[22]
  i1004.commandBufferCount = i1005[23]
  i1004.cameraType = i1005[24]
  i1004.enabled = !!i1005[25]
  return i1004
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i1006 = root || request.c( 'PlayworksComplianceHooks' )
  var i1007 = data
  i1006.iosStoreUrl = i1007[0]
  i1006.androidStoreUrl = i1007[1]
  i1006.defaultLevel = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.tagId = i1009[1]
  i1008.enabled = !!i1009[2]
  i1008.isStatic = !!i1009[3]
  i1008.layer = i1009[4]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1011 = data
  i1010.ambientIntensity = i1011[0]
  i1010.reflectionIntensity = i1011[1]
  i1010.ambientMode = i1011[2]
  i1010.ambientLight = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.ambientSkyColor = new pc.Color(i1011[7], i1011[8], i1011[9], i1011[10])
  i1010.ambientGroundColor = new pc.Color(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.ambientEquatorColor = new pc.Color(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fogColor = new pc.Color(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.fogEndDistance = i1011[23]
  i1010.fogStartDistance = i1011[24]
  i1010.fogDensity = i1011[25]
  i1010.fog = !!i1011[26]
  request.r(i1011[27], i1011[28], 0, i1010, 'skybox')
  i1010.fogMode = i1011[29]
  var i1013 = i1011[30]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1013[i + 0]) );
  }
  i1010.lightmaps = i1012
  i1010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1011[31], i1010.lightProbes)
  i1010.lightmapsMode = i1011[32]
  i1010.mixedBakeMode = i1011[33]
  i1010.environmentLightingMode = i1011[34]
  i1010.ambientProbe = new pc.SphericalHarmonicsL2(i1011[35])
  i1010.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1011[36])
  i1010.useReferenceAmbientProbe = !!i1011[37]
  request.r(i1011[38], i1011[39], 0, i1010, 'customReflection')
  request.r(i1011[40], i1011[41], 0, i1010, 'defaultReflection')
  i1010.defaultReflectionMode = i1011[42]
  i1010.defaultReflectionResolution = i1011[43]
  i1010.sunLightObjectId = i1011[44]
  i1010.pixelLightCount = i1011[45]
  i1010.defaultReflectionHDR = !!i1011[46]
  i1010.hasLightDataAsset = !!i1011[47]
  i1010.hasManualGenerate = !!i1011[48]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'lightmapColor')
  request.r(i1017[2], i1017[3], 0, i1016, 'lightmapDirection')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1018 = root || new UnityEngine.LightProbes()
  var i1019 = data
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1026 = root || new pc.UnityMaterial()
  var i1027 = data
  i1026.name = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'shader')
  i1026.renderQueue = i1027[3]
  i1026.enableInstancing = !!i1027[4]
  var i1029 = i1027[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1029[i + 0]) );
  }
  i1026.floatParameters = i1028
  var i1031 = i1027[6]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1031[i + 0]) );
  }
  i1026.colorParameters = i1030
  var i1033 = i1027[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1033[i + 0]) );
  }
  i1026.vectorParameters = i1032
  var i1035 = i1027[8]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1035[i + 0]) );
  }
  i1026.textureParameters = i1034
  var i1037 = i1027[9]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1037[i + 0]) );
  }
  i1026.materialFlags = i1036
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.value = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.value = new pc.Color(i1045[1], i1045[2], i1045[3], i1045[4])
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.value = new pc.Vec4( i1049[1], i1049[2], i1049[3], i1049[4] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1053 = data
  i1052.name = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'value')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.enabled = !!i1057[1]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1061[i + 0]));
  }
  i1058.ShaderCompilationErrors = i1060
  i1058.name = i1059[1]
  i1058.guid = i1059[2]
  var i1063 = i1059[3]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.shaderDefinedKeywords = i1062
  var i1065 = i1059[4]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1065[i + 0]) );
  }
  i1058.passes = i1064
  var i1067 = i1059[5]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1067[i + 0]) );
  }
  i1058.usePasses = i1066
  var i1069 = i1059[6]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1069[i + 0]) );
  }
  i1058.defaultParameterValues = i1068
  request.r(i1059[7], i1059[8], 0, i1058, 'unityFallbackShader')
  i1058.readDepth = !!i1059[9]
  i1058.hasDepthOnlyPass = !!i1059[10]
  i1058.isCreatedByShaderGraph = !!i1059[11]
  i1058.disableBatching = !!i1059[12]
  i1058.compiled = !!i1059[13]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1073 = data
  i1072.shaderName = i1073[0]
  i1072.errorMessage = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1078 = root || new pc.UnityShaderPass()
  var i1079 = data
  i1078.id = i1079[0]
  i1078.subShaderIndex = i1079[1]
  i1078.name = i1079[2]
  i1078.passType = i1079[3]
  i1078.grabPassTextureName = i1079[4]
  i1078.usePass = !!i1079[5]
  i1078.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[6], i1078.zTest)
  i1078.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[7], i1078.zWrite)
  i1078.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[8], i1078.culling)
  i1078.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[9], i1078.blending)
  i1078.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[10], i1078.alphaBlending)
  i1078.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[11], i1078.colorWriteMask)
  i1078.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[12], i1078.offsetUnits)
  i1078.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[13], i1078.offsetFactor)
  i1078.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[14], i1078.stencilRef)
  i1078.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[15], i1078.stencilReadMask)
  i1078.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[16], i1078.stencilWriteMask)
  i1078.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[17], i1078.stencilOp)
  i1078.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[18], i1078.stencilOpFront)
  i1078.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[19], i1078.stencilOpBack)
  var i1081 = i1079[20]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1081[i + 0]) );
  }
  i1078.tags = i1080
  var i1083 = i1079[21]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.passDefinedKeywords = i1082
  var i1085 = i1079[22]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1085[i + 0]) );
  }
  i1078.passDefinedKeywordGroups = i1084
  var i1087 = i1079[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1087[i + 0]) );
  }
  i1078.variants = i1086
  var i1089 = i1079[24]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1078.excludedVariants = i1088
  i1078.hasDepthReader = !!i1079[25]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1091 = data
  i1090.val = i1091[0]
  i1090.name = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1093 = data
  i1092.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[0], i1092.src)
  i1092.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[1], i1092.dst)
  i1092.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[2], i1092.op)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1095 = data
  i1094.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.pass)
  i1094.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.fail)
  i1094.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.zFail)
  i1094.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[3], i1094.comp)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1102.keywords = i1104
  i1102.hasDiscard = !!i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1109 = data
  i1108.passId = i1109[0]
  i1108.subShaderIndex = i1109[1]
  var i1111 = i1109[2]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.keywords = i1110
  i1108.vertexProgram = i1109[3]
  i1108.fragmentProgram = i1109[4]
  i1108.exportedForWebGl2 = !!i1109[5]
  i1108.readDepth = !!i1109[6]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'shader')
  i1114.pass = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.type = i1119[1]
  i1118.value = new pc.Vec4( i1119[2], i1119[3], i1119[4], i1119[5] )
  i1118.textureValue = i1119[6]
  i1118.shaderPropertyFlag = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1123[i + 0]) );
  }
  i1120.files = i1122
  i1120.componentToPrefabIds = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1127 = data
  i1126.path = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'unityObject')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1131[i + 0]) );
  }
  i1128.scriptsExecutionOrder = i1130
  var i1133 = i1129[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1133[i + 0]) );
  }
  i1128.sortingLayers = i1132
  var i1135 = i1129[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1135[i + 0]) );
  }
  i1128.cullingLayers = i1134
  i1128.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1129[3], i1128.timeSettings)
  i1128.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1129[4], i1128.physicsSettings)
  i1128.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1129[5], i1128.physics2DSettings)
  i1128.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[6], i1128.qualitySettings)
  i1128.enableRealtimeShadows = !!i1129[7]
  i1128.enableAutoInstancing = !!i1129[8]
  i1128.enableStaticBatching = !!i1129[9]
  i1128.enableDynamicBatching = !!i1129[10]
  i1128.lightmapEncodingQuality = i1129[11]
  i1128.desiredColorSpace = i1129[12]
  var i1137 = i1129[13]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1128.allTags = i1136
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.value = i1145[2]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1151 = data
  i1150.fixedDeltaTime = i1151[0]
  i1150.maximumDeltaTime = i1151[1]
  i1150.timeScale = i1151[2]
  i1150.maximumParticleTimestep = i1151[3]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1153 = data
  i1152.gravity = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.defaultSolverIterations = i1153[3]
  i1152.bounceThreshold = i1153[4]
  i1152.autoSyncTransforms = !!i1153[5]
  i1152.autoSimulation = !!i1153[6]
  var i1155 = i1153[7]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1155[i + 0]) );
  }
  i1152.collisionMatrix = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1159 = data
  i1158.enabled = !!i1159[0]
  i1158.layerId = i1159[1]
  i1158.otherLayerId = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'material')
  i1160.gravity = new pc.Vec2( i1161[2], i1161[3] )
  i1160.positionIterations = i1161[4]
  i1160.velocityIterations = i1161[5]
  i1160.velocityThreshold = i1161[6]
  i1160.maxLinearCorrection = i1161[7]
  i1160.maxAngularCorrection = i1161[8]
  i1160.maxTranslationSpeed = i1161[9]
  i1160.maxRotationSpeed = i1161[10]
  i1160.baumgarteScale = i1161[11]
  i1160.baumgarteTOIScale = i1161[12]
  i1160.timeToSleep = i1161[13]
  i1160.linearSleepTolerance = i1161[14]
  i1160.angularSleepTolerance = i1161[15]
  i1160.defaultContactOffset = i1161[16]
  i1160.autoSimulation = !!i1161[17]
  i1160.queriesHitTriggers = !!i1161[18]
  i1160.queriesStartInColliders = !!i1161[19]
  i1160.callbacksOnDisable = !!i1161[20]
  i1160.reuseCollisionCallbacks = !!i1161[21]
  i1160.autoSyncTransforms = !!i1161[22]
  var i1163 = i1161[23]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1163[i + 0]) );
  }
  i1160.collisionMatrix = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.layerId = i1167[1]
  i1166.otherLayerId = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1171[i + 0]) );
  }
  i1168.qualityLevels = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1168.names = i1172
  i1168.shadows = i1169[2]
  i1168.anisotropicFiltering = i1169[3]
  i1168.antiAliasing = i1169[4]
  i1168.lodBias = i1169[5]
  i1168.shadowCascades = i1169[6]
  i1168.shadowDistance = i1169[7]
  i1168.shadowmaskMode = i1169[8]
  i1168.shadowProjection = i1169[9]
  i1168.shadowResolution = i1169[10]
  i1168.softParticles = !!i1169[11]
  i1168.softVegetation = !!i1169[12]
  i1168.activeColorSpace = i1169[13]
  i1168.desiredColorSpace = i1169[14]
  i1168.masterTextureLimit = i1169[15]
  i1168.maxQueuedFrames = i1169[16]
  i1168.particleRaycastBudget = i1169[17]
  i1168.pixelLightCount = i1169[18]
  i1168.realtimeReflectionProbes = !!i1169[19]
  i1168.shadowCascade2Split = i1169[20]
  i1168.shadowCascade4Split = new pc.Vec3( i1169[21], i1169[22], i1169[23] )
  i1168.streamingMipmapsActive = !!i1169[24]
  i1168.vSyncCount = i1169[25]
  i1168.asyncUploadBufferSize = i1169[26]
  i1168.asyncUploadTimeSlice = i1169[27]
  i1168.billboardsFaceCameraPosition = !!i1169[28]
  i1168.shadowNearPlaneOffset = i1169[29]
  i1168.streamingMipmapsMemoryBudget = i1169[30]
  i1168.maximumLODLevel = i1169[31]
  i1168.streamingMipmapsAddAllCameras = !!i1169[32]
  i1168.streamingMipmapsMaxLevelReduction = i1169[33]
  i1168.streamingMipmapsRenderersPerFrame = i1169[34]
  i1168.resolutionScalingFixedDPIFactor = i1169[35]
  i1168.streamingMipmapsMaxFileIORequests = i1169[36]
  i1168.currentQualityLevel = i1169[37]
  return i1168
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"5":[6],"7":[6],"8":[6],"9":[6],"10":[6],"11":[6],"12":[13],"14":[0],"15":[16],"17":[16],"18":[16],"19":[16],"20":[16],"21":[16],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[23],"31":[23],"32":[23],"33":[23],"34":[23],"35":[23],"36":[0],"37":[38],"39":[40],"41":[40],"42":[43],"44":[45],"46":[0],"47":[48],"49":[50],"51":[42],"52":[43],"53":[38,43],"54":[43,55],"56":[43],"57":[55,43],"58":[38],"59":[55,43],"60":[43],"61":[43],"62":[43],"63":[42],"64":[55,43],"65":[43],"66":[42],"67":[43],"68":[43],"69":[43],"70":[43],"71":[43],"72":[43],"73":[43],"74":[43],"75":[43],"76":[55,43],"77":[43],"78":[43],"79":[43],"80":[43],"81":[55,43],"82":[43],"83":[50],"84":[50],"85":[50],"86":[50],"87":[0],"88":[0]}

Deserializers.types = ["UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","UnityEngine.Shader","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36757";

Deserializers.projectId = "61b95b9034cdb4f8ab822253bfbd2351";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.inputsystem: 1.14.2\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1819";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3407";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "baeb2d08-e24e-4e98-8fc9-f7d3b389d048";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

