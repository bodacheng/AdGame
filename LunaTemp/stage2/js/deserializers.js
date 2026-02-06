var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSpring' )
  var i595 = data
  i594.spring = i595[0]
  i594.damper = i595[1]
  i594.targetPosition = i595[2]
  return i594
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointMotor' )
  var i597 = data
  i596.m_TargetVelocity = i597[0]
  i596.m_Force = i597[1]
  i596.m_FreeSpin = i597[2]
  return i596
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointLimits' )
  var i599 = data
  i598.m_Min = i599[0]
  i598.m_Max = i599[1]
  i598.m_Bounciness = i599[2]
  i598.m_BounceMinVelocity = i599[3]
  i598.m_ContactDistance = i599[4]
  i598.minBounce = i599[5]
  i598.maxBounce = i599[6]
  return i598
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointDrive' )
  var i601 = data
  i600.m_PositionSpring = i601[0]
  i600.m_PositionDamper = i601[1]
  i600.m_MaximumForce = i601[2]
  i600.m_UseAcceleration = i601[3]
  return i600
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i603 = data
  i602.m_Spring = i603[0]
  i602.m_Damper = i603[1]
  return i602
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i605 = data
  i604.m_Limit = i605[0]
  i604.m_Bounciness = i605[1]
  i604.m_ContactDistance = i605[2]
  return i604
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i607 = data
  i606.m_ExtremumSlip = i607[0]
  i606.m_ExtremumValue = i607[1]
  i606.m_AsymptoteSlip = i607[2]
  i606.m_AsymptoteValue = i607[3]
  i606.m_Stiffness = i607[4]
  return i606
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i609 = data
  i608.m_LowerAngle = i609[0]
  i608.m_UpperAngle = i609[1]
  return i608
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i611 = data
  i610.m_MotorSpeed = i611[0]
  i610.m_MaximumMotorTorque = i611[1]
  return i610
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i613 = data
  i612.m_DampingRatio = i613[0]
  i612.m_Frequency = i613[1]
  i612.m_Angle = i613[2]
  return i612
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i615 = data
  i614.m_LowerTranslation = i615[0]
  i614.m_UpperTranslation = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i616 = root || new pc.UnityMaterial()
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'shader')
  i616.renderQueue = i617[3]
  i616.enableInstancing = !!i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i619[i + 0]) );
  }
  i616.floatParameters = i618
  var i621 = i617[6]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i621[i + 0]) );
  }
  i616.colorParameters = i620
  var i623 = i617[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i623[i + 0]) );
  }
  i616.vectorParameters = i622
  var i625 = i617[8]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i625[i + 0]) );
  }
  i616.textureParameters = i624
  var i627 = i617[9]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i627[i + 0]) );
  }
  i616.materialFlags = i626
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i631 = data
  i630.name = i631[0]
  i630.value = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = new pc.Color(i635[1], i635[2], i635[3], i635[4])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Vec4( i639[1], i639[2], i639[3], i639[4] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'value')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i647 = data
  i646.name = i647[0]
  i646.enabled = !!i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i649 = data
  i648.name = i649[0]
  i648.index = i649[1]
  i648.startup = !!i649[2]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i651 = data
  i650.aspect = i651[0]
  i650.orthographic = !!i651[1]
  i650.orthographicSize = i651[2]
  i650.backgroundColor = new pc.Color(i651[3], i651[4], i651[5], i651[6])
  i650.nearClipPlane = i651[7]
  i650.farClipPlane = i651[8]
  i650.fieldOfView = i651[9]
  i650.depth = i651[10]
  i650.clearFlags = i651[11]
  i650.cullingMask = i651[12]
  i650.rect = i651[13]
  request.r(i651[14], i651[15], 0, i650, 'targetTexture')
  i650.usePhysicalProperties = !!i651[16]
  i650.focalLength = i651[17]
  i650.sensorSize = new pc.Vec2( i651[18], i651[19] )
  i650.lensShift = new pc.Vec2( i651[20], i651[21] )
  i650.gateFit = i651[22]
  i650.commandBufferCount = i651[23]
  i650.cameraType = i651[24]
  i650.enabled = !!i651[25]
  return i650
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i652 = root || request.c( 'PlayworksComplianceHooks' )
  var i653 = data
  i652.iosStoreUrl = i653[0]
  i652.androidStoreUrl = i653[1]
  i652.defaultLevel = i653[2]
  return i652
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i654 = root || request.c( 'SimpleDodgeGame' )
  var i655 = data
  i654.playerRadius = i655[0]
  i654.playerMoveSpeed = i655[1]
  i654.playerBottomOffset = i655[2]
  i654.obstacleMinRadius = i655[3]
  i654.obstacleMaxRadius = i655[4]
  i654.obstacleMinSpeed = i655[5]
  i654.obstacleMaxSpeed = i655[6]
  i654.spawnIntervalStart = i655[7]
  i654.spawnIntervalEnd = i655[8]
  i654.difficultyRampSeconds = i655[9]
  i654.sidePadding = i655[10]
  i654.despawnPadding = i655[11]
  request.r(i655[12], i655[13], 0, i654, 'spriteMaterial')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i657 = data
  i656.name = i657[0]
  i656.tagId = i657[1]
  i656.enabled = !!i657[2]
  i656.isStatic = !!i657[3]
  i656.layer = i657[4]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i659 = data
  i658.ambientIntensity = i659[0]
  i658.reflectionIntensity = i659[1]
  i658.ambientMode = i659[2]
  i658.ambientLight = new pc.Color(i659[3], i659[4], i659[5], i659[6])
  i658.ambientSkyColor = new pc.Color(i659[7], i659[8], i659[9], i659[10])
  i658.ambientGroundColor = new pc.Color(i659[11], i659[12], i659[13], i659[14])
  i658.ambientEquatorColor = new pc.Color(i659[15], i659[16], i659[17], i659[18])
  i658.fogColor = new pc.Color(i659[19], i659[20], i659[21], i659[22])
  i658.fogEndDistance = i659[23]
  i658.fogStartDistance = i659[24]
  i658.fogDensity = i659[25]
  i658.fog = !!i659[26]
  request.r(i659[27], i659[28], 0, i658, 'skybox')
  i658.fogMode = i659[29]
  var i661 = i659[30]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i661[i + 0]) );
  }
  i658.lightmaps = i660
  i658.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i659[31], i658.lightProbes)
  i658.lightmapsMode = i659[32]
  i658.mixedBakeMode = i659[33]
  i658.environmentLightingMode = i659[34]
  i658.ambientProbe = new pc.SphericalHarmonicsL2(i659[35])
  i658.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i659[36])
  i658.useReferenceAmbientProbe = !!i659[37]
  request.r(i659[38], i659[39], 0, i658, 'customReflection')
  request.r(i659[40], i659[41], 0, i658, 'defaultReflection')
  i658.defaultReflectionMode = i659[42]
  i658.defaultReflectionResolution = i659[43]
  i658.sunLightObjectId = i659[44]
  i658.pixelLightCount = i659[45]
  i658.defaultReflectionHDR = !!i659[46]
  i658.hasLightDataAsset = !!i659[47]
  i658.hasManualGenerate = !!i659[48]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'lightmapColor')
  request.r(i665[2], i665[3], 0, i664, 'lightmapDirection')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i666 = root || new UnityEngine.LightProbes()
  var i667 = data
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i677[i + 0]));
  }
  i674.ShaderCompilationErrors = i676
  i674.name = i675[1]
  i674.guid = i675[2]
  var i679 = i675[3]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i674.shaderDefinedKeywords = i678
  var i681 = i675[4]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i681[i + 0]) );
  }
  i674.passes = i680
  var i683 = i675[5]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i683[i + 0]) );
  }
  i674.usePasses = i682
  var i685 = i675[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i685[i + 0]) );
  }
  i674.defaultParameterValues = i684
  request.r(i675[7], i675[8], 0, i674, 'unityFallbackShader')
  i674.readDepth = !!i675[9]
  i674.hasDepthOnlyPass = !!i675[10]
  i674.isCreatedByShaderGraph = !!i675[11]
  i674.disableBatching = !!i675[12]
  i674.compiled = !!i675[13]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i689 = data
  i688.shaderName = i689[0]
  i688.errorMessage = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i694 = root || new pc.UnityShaderPass()
  var i695 = data
  i694.id = i695[0]
  i694.subShaderIndex = i695[1]
  i694.name = i695[2]
  i694.passType = i695[3]
  i694.grabPassTextureName = i695[4]
  i694.usePass = !!i695[5]
  i694.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[6], i694.zTest)
  i694.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[7], i694.zWrite)
  i694.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[8], i694.culling)
  i694.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[9], i694.blending)
  i694.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[10], i694.alphaBlending)
  i694.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[11], i694.colorWriteMask)
  i694.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[12], i694.offsetUnits)
  i694.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[13], i694.offsetFactor)
  i694.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[14], i694.stencilRef)
  i694.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[15], i694.stencilReadMask)
  i694.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[16], i694.stencilWriteMask)
  i694.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[17], i694.stencilOp)
  i694.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[18], i694.stencilOpFront)
  i694.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[19], i694.stencilOpBack)
  var i697 = i695[20]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i697[i + 0]) );
  }
  i694.tags = i696
  var i699 = i695[21]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.passDefinedKeywords = i698
  var i701 = i695[22]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i701[i + 0]) );
  }
  i694.passDefinedKeywordGroups = i700
  var i703 = i695[23]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i703[i + 0]) );
  }
  i694.variants = i702
  var i705 = i695[24]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i694.excludedVariants = i704
  i694.hasDepthReader = !!i695[25]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i707 = data
  i706.val = i707[0]
  i706.name = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i709 = data
  i708.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[0], i708.src)
  i708.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[1], i708.dst)
  i708.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[2], i708.op)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i711 = data
  i710.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.pass)
  i710.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.fail)
  i710.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.zFail)
  i710.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[3], i710.comp)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i719 = data
  var i721 = i719[0]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i718.keywords = i720
  i718.hasDiscard = !!i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i725 = data
  i724.passId = i725[0]
  i724.subShaderIndex = i725[1]
  var i727 = i725[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i724.keywords = i726
  i724.vertexProgram = i725[3]
  i724.fragmentProgram = i725[4]
  i724.exportedForWebGl2 = !!i725[5]
  i724.readDepth = !!i725[6]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'shader')
  i730.pass = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i735 = data
  i734.name = i735[0]
  i734.type = i735[1]
  i734.value = new pc.Vec4( i735[2], i735[3], i735[4], i735[5] )
  i734.textureValue = i735[6]
  i734.shaderPropertyFlag = i735[7]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i739[i + 0]) );
  }
  i736.files = i738
  i736.componentToPrefabIds = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i743 = data
  i742.path = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'unityObject')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i747[i + 0]) );
  }
  i744.scriptsExecutionOrder = i746
  var i749 = i745[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i749[i + 0]) );
  }
  i744.sortingLayers = i748
  var i751 = i745[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i751[i + 0]) );
  }
  i744.cullingLayers = i750
  i744.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i745[3], i744.timeSettings)
  i744.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i745[4], i744.physicsSettings)
  i744.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i745[5], i744.physics2DSettings)
  i744.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i745[6], i744.qualitySettings)
  i744.enableRealtimeShadows = !!i745[7]
  i744.enableAutoInstancing = !!i745[8]
  i744.enableStaticBatching = !!i745[9]
  i744.enableDynamicBatching = !!i745[10]
  i744.lightmapEncodingQuality = i745[11]
  i744.desiredColorSpace = i745[12]
  var i753 = i745[13]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i744.allTags = i752
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i757 = data
  i756.name = i757[0]
  i756.value = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i761 = data
  i760.id = i761[0]
  i760.name = i761[1]
  i760.value = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i765 = data
  i764.id = i765[0]
  i764.name = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i767 = data
  i766.fixedDeltaTime = i767[0]
  i766.maximumDeltaTime = i767[1]
  i766.timeScale = i767[2]
  i766.maximumParticleTimestep = i767[3]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i769 = data
  i768.gravity = new pc.Vec3( i769[0], i769[1], i769[2] )
  i768.defaultSolverIterations = i769[3]
  i768.bounceThreshold = i769[4]
  i768.autoSyncTransforms = !!i769[5]
  i768.autoSimulation = !!i769[6]
  var i771 = i769[7]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i771[i + 0]) );
  }
  i768.collisionMatrix = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i775 = data
  i774.enabled = !!i775[0]
  i774.layerId = i775[1]
  i774.otherLayerId = i775[2]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'material')
  i776.gravity = new pc.Vec2( i777[2], i777[3] )
  i776.positionIterations = i777[4]
  i776.velocityIterations = i777[5]
  i776.velocityThreshold = i777[6]
  i776.maxLinearCorrection = i777[7]
  i776.maxAngularCorrection = i777[8]
  i776.maxTranslationSpeed = i777[9]
  i776.maxRotationSpeed = i777[10]
  i776.baumgarteScale = i777[11]
  i776.baumgarteTOIScale = i777[12]
  i776.timeToSleep = i777[13]
  i776.linearSleepTolerance = i777[14]
  i776.angularSleepTolerance = i777[15]
  i776.defaultContactOffset = i777[16]
  i776.autoSimulation = !!i777[17]
  i776.queriesHitTriggers = !!i777[18]
  i776.queriesStartInColliders = !!i777[19]
  i776.callbacksOnDisable = !!i777[20]
  i776.reuseCollisionCallbacks = !!i777[21]
  i776.autoSyncTransforms = !!i777[22]
  var i779 = i777[23]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i779[i + 0]) );
  }
  i776.collisionMatrix = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i783 = data
  i782.enabled = !!i783[0]
  i782.layerId = i783[1]
  i782.otherLayerId = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i787[i + 0]) );
  }
  i784.qualityLevels = i786
  var i789 = i785[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i784.names = i788
  i784.shadows = i785[2]
  i784.anisotropicFiltering = i785[3]
  i784.antiAliasing = i785[4]
  i784.lodBias = i785[5]
  i784.shadowCascades = i785[6]
  i784.shadowDistance = i785[7]
  i784.shadowmaskMode = i785[8]
  i784.shadowProjection = i785[9]
  i784.shadowResolution = i785[10]
  i784.softParticles = !!i785[11]
  i784.softVegetation = !!i785[12]
  i784.activeColorSpace = i785[13]
  i784.desiredColorSpace = i785[14]
  i784.masterTextureLimit = i785[15]
  i784.maxQueuedFrames = i785[16]
  i784.particleRaycastBudget = i785[17]
  i784.pixelLightCount = i785[18]
  i784.realtimeReflectionProbes = !!i785[19]
  i784.shadowCascade2Split = i785[20]
  i784.shadowCascade4Split = new pc.Vec3( i785[21], i785[22], i785[23] )
  i784.streamingMipmapsActive = !!i785[24]
  i784.vSyncCount = i785[25]
  i784.asyncUploadBufferSize = i785[26]
  i784.asyncUploadTimeSlice = i785[27]
  i784.billboardsFaceCameraPosition = !!i785[28]
  i784.shadowNearPlaneOffset = i785[29]
  i784.streamingMipmapsMemoryBudget = i785[30]
  i784.maximumLODLevel = i785[31]
  i784.streamingMipmapsAddAllCameras = !!i785[32]
  i784.streamingMipmapsMaxLevelReduction = i785[33]
  i784.streamingMipmapsRenderersPerFrame = i785[34]
  i784.resolutionScalingFixedDPIFactor = i785[35]
  i784.streamingMipmapsMaxFileIORequests = i785[36]
  i784.currentQualityLevel = i785[37]
  return i784
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"7":[8],"9":[8],"10":[8],"11":[8],"12":[8],"13":[8],"14":[15],"16":[1],"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[25],"33":[25],"34":[25],"35":[25],"36":[25],"37":[25],"38":[1],"39":[40],"41":[42],"43":[42],"44":[45],"46":[47],"48":[1],"49":[50],"51":[52],"53":[44],"54":[45],"55":[40,45],"56":[45,57],"58":[45],"59":[57,45],"60":[40],"61":[57,45],"62":[45],"63":[45],"64":[45],"65":[44],"66":[57,45],"67":[45],"68":[44],"69":[45],"70":[45],"71":[45],"72":[45],"73":[45],"74":[45],"75":[45],"76":[45],"77":[45],"78":[57,45],"79":[45],"80":[45],"81":[45],"82":[45],"83":[57,45],"84":[45],"85":[52],"86":[52],"87":[52],"88":[52],"89":[1],"90":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Material","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "oneFinger";

Deserializers.lunaAppID = "36796";

Deserializers.projectId = "61b95b9034cdb4f8ab822253bfbd2351";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1813";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3390";

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

Deserializers.linearColorSpace = false;

Deserializers.buildID = "576cd533-2dbb-47de-964e-c019d97470e9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

