import React from 'react';
import N, { Platform } from 'react-native';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import { View as View$1, useDimensions } from 'react-unified';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import Svg, { Path, G, Polygon } from 'react-native-svg';

function useTransition(_ref) {
  var input = _ref.input,
      outputRange = _ref.outputRange,
      duration = _ref.duration;
  return [null, null];
}

function Audio_native () {
  return null;
}

function StatusBar(_ref) {
  var backgroundColor = _ref.backgroundColor,
      barStyle = _ref.barStyle;
  return React.createElement(N.StatusBar, {
    backgroundColor: backgroundColor,
    barStyle: barStyle
  });
}

function Center(_ref) {
  var children = _ref.children,
      direction = _ref.direction,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "direction", "style"]);

  return React.createElement(View$1, _extends({
    style: _extends({
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, style)
  }, props), children);
}
Center.defaultProps = {
  style: {}
};

function useLegacyState(initial) {
  var _React$useState = React.useState(initial),
      state = _React$useState[0],
      setState = _React$useState[1];

  function set(newState) {
    setState(_extends({}, state, {}, newState));
  }

  return [state, set];
}

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

function usePassiveState(fromValue, _ref) {
  var defaultValue = _ref.defaultValue,
      delay = _ref.delay,
      activation = _ref.activation;

  var _React$useState = React.useState(defaultValue),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var _React$useState2 = React.useState(false),
      passing = _React$useState2[0],
      setPassing = _React$useState2[1];

  React.useEffect(function () {
    // ignore deactive changes
    if (!activation) {
      return;
    }

    setPassing(true);
    var timeout = setTimeout(function () {
      return setValue(fromValue) | setPassing(false);
    }, delay);
    return function () {
      return clearTimeout(timeout);
    };
  }, [fromValue, activation]);
  return [value, passing, setValue];
}

var FormContext =
/*#__PURE__*/
React.createContext({
  onSubmitFn: function onSubmitFn() {
    return null;
  }
});

var Button =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var _onPress = _ref.onPress,
      style = _ref.style,
      type = _ref.type,
      children = _ref.children;
  var formCtx = React.useContext(FormContext);
  return React.createElement(N.TouchableWithoutFeedback, {
    onPress: function onPress() {
      _onPress && _onPress();

      if (type === 'submit') {
        formCtx.onSubmitFn();
      }
    }
  }, React.createElement(N.View, {
    style: style,
    ref: ref
  }, children));
});

var CopyToClipboard_native = (function (_ref) {
  var children = _ref.children;
  return children;
});

var CropField =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CropField, _React$Component);

  function CropField() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CropField.prototype;

  _proto.render = function render() {
    return null;
  };

  return CropField;
}(React.Component);

function useActive(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return value;
}

function useDimensionsNative(dim) {
  if (dim === void 0) {
    dim = 'window';
  }

  var initial = N.Dimensions.get(dim);

  var _React$useState = React.useState(initial),
      dimensions = _React$useState[0],
      setDimensions = _React$useState[1];

  React.useEffect(function () {
    var updateDimensions = function updateDimensions(dims) {
      return setDimensions(dims[dim]);
    };

    N.Dimensions.addEventListener('change', updateDimensions);
    return function () {
      return N.Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);
  return dimensions;
}

function useFocus(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return value;
}

function useHover(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return value;
}

var FilePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FilePicker, _React$PureComponent);

  function FilePicker() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FilePicker.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        multiple = _this$props.multiple;
    return null;
  };

  return FilePicker;
}(React.PureComponent);

var FontContext =
/*#__PURE__*/
React.createContext({
  fontFamily: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  color: undefined,
  lineHeight: undefined
});

function FontProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  var ctx = React.useContext(FontContext);
  return React.createElement(FontContext.Provider, {
    value: _extends({}, ctx, {}, value)
  }, children);
}

function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children;

  function onSubmitFn() {
    onSubmit && onSubmit();
  }

  return React.createElement(FormContext.Provider, {
    value: {
      onSubmitFn: onSubmitFn
    }
  }, children);
}

var PageTitle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PageTitle, _React$Component);

  function PageTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageTitle.prototype;

  _proto.render = function render() {
    return null;
  };

  return PageTitle;
}(React.Component);

var Theme =
/*#__PURE__*/
React.createContext({
  placeholderViewColor: '#bbb',
  placeholderTextColor: '#aaa'
});

function PlaceholderView(_ref) {
  var style = _ref.style;
  var themeCtx = React.useContext(Theme);
  return React.createElement(View$1, {
    style: _extends({}, style, {
      backgroundColor: themeCtx.placeholderViewColor
    })
  });
}
PlaceholderView.defaultProps = {
  style: {}
};

function Image(_ref) {
  var source = _ref.source,
      placeholder = _ref.placeholder,
      resizeMode = _ref.resizeMode,
      style = _ref.style;
  var Placeholder = placeholder;
  return source ? React.createElement(N.Image, {
    source: {
      uri: source
    },
    resizeMode: resizeMode,
    style: style
  }) : React.createElement(Placeholder, {
    style: style
  });
}
Image.defaultProps = {
  style: {},
  placeholder: function placeholder(_ref2) {
    var style = _ref2.style;
    return React.createElement(PlaceholderView, {
      style: style
    });
  }
};

var Input =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      onValue = _ref.onValue,
      placeholder = _ref.placeholder,
      keyboard = _ref.keyboard,
      autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      style = _ref.style,
      multiLine = _ref.multiLine,
      minLines = _ref.minLines,
      disabled = _ref.disabled,
      onFocus = _ref.onFocus;
  var fontCtx = React.useContext(FontContext);
  return React.createElement(N.TextInput, {
    ref: ref,
    spellCheck: false,
    autoCorrect: false,
    autoFocus: autoFocus,
    keyboardType: keyboard,
    value: value,
    multiline: multiLine,
    onFocus: onFocus,
    onChangeText: function onChangeText(text) {
      onValue && onValue(text);
    },
    placeholder: placeholder,
    style: _extends({
      fontFamily: fontCtx.fontFamily,
      fontSize: fontCtx.fontSize,
      fontWeight: fontCtx.fontWeight,
      color: fontCtx.color,
      lineHeight: fontCtx.lineHeight,
      paddingHorizontal: 0,
      paddingVertical: 0
    }, style)
  });
});
Input.Keyboard = {
  TEXT: 'default',
  NUMBER: 'number-pad',
  // or numeric
  TEL: 'phone-pad',
  EMAIL: 'email-address'
};
Input.defaultProps = {
  keyboard: Input.Keyboard.TEXT,
  style: {},
  autoComplete: 'off'
};

var NavContext =
/*#__PURE__*/
React.createContext({
  getPathname: function getPathname() {
    return null;
  },
  getQuery: function getQuery() {
    return null;
  },
  events: {},
  push: function push() {
    return null;
  },
  replace: function replace() {
    return null;
  },
  back: function back() {
    return null;
  }
});

function useRouter() {
  var nav = React.useContext(NavContext);
  return {
    getPathname: function getPathname() {
      return nav.getPathname();
    },
    getQuery: function getQuery(name, defaultValue) {
      return nav.getQuery(name, defaultValue);
    },
    events: {
      on: function on() {}
    },
    push: function push(href) {
      return nav.push(href.pathname, href.query);
    },
    replace: function replace(href) {
      return nav.replace(href.pathname, href.query);
    },
    back: function back() {
      return nav.back();
    }
  };
}

var Touch =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var onPress = _ref.onPress,
      style = _ref.style,
      children = _ref.children;
  var T = N.TouchableWithoutFeedback;
  return React.createElement(T, {
    onPress: onPress
  }, React.createElement(N.View, {
    style: style,
    ref: ref
  }, children));
});

function Link(_ref) {
  var href = _ref.href,
      as = _ref.as,
      onClick = _ref.onClick,
      style = _ref.style,
      children = _ref.children;
  var router = useRouter();
  return React.createElement(Touch, {
    onPress: function onPress() {
      router.push(href);
    },
    style: style
  }, children);
}

var HList =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HList, _React$Component);

  function HList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HList.prototype;

  _proto.render = function render() {
    return null;
  };

  return HList;
}(React.Component);

var List_native = /*#__PURE__*/
React.forwardRef(function List(_ref, ref) {
  var items = _ref.items,
      keyExtractor = _ref.keyExtractor,
      topper = _ref.topper,
      loadMoreItems = _ref.loadMoreItems,
      _renderItem = _ref.renderItem,
      getItemHeight = _ref.getItemHeight,
      initialNumToRender = _ref.initialNumToRender;
  var noItem = !items || !items.length;
  var onlyTopper = noItem && topper;
  var getItemLayout = undefined;

  if (getItemHeight) {
    getItemLayout = function getItemLayout(data, index) {
      var height = getItemHeight(data, index);
      return {
        length: height,
        offset: height * index,
        index: index
      };
    };
  }

  return React.createElement(N.FlatList, {
    ref: ref,
    style: {
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    },
    data: items,
    keyExtractor: keyExtractor,
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item,
          index = _ref2.index;
      return React.createElement(View$1, null, index === 0 && topper ? topper : null, onlyTopper ? null : _renderItem(item, index));
    },
    onEndReachedThreshold: 4,
    onEndReached: function onEndReached(info) {
      loadMoreItems();
    },
    getItemLayout: getItemLayout,
    initialNumToRender: initialNumToRender
  });
});

function ListReversed(_ref) {
  var renderItem = _ref.renderItem,
      props = _objectWithoutPropertiesLoose(_ref, ["renderItem"]);

  return null;
}

function Modal(_ref) {
  var children = _ref.children;
  return null;
}

Modal.Container = function (_ref2) {
  var children = _ref2.children;
  return React.createElement(React.Fragment, null, children);
};

function usePlatform() {
  return {
    os: Platform.OS,
    version: Platform.Version
  };
}

function ScrollView() {
  return null;
}

var NoUserSelect_native = N.View;

var SidebarContext =
/*#__PURE__*/
React.createContext(0);

function Sidebar(_ref) {
  var open = _ref.open,
      rtl = _ref.rtl,
      side = _ref.side,
      width = _ref.width,
      behavior = _ref.behavior,
      children = _ref.children;
  return React.createElement(SidebarContext.Provider, {
    value: width
  }, children);
}

function SidebarSafe(_ref) {
  var style = _ref.style,
      children = _ref.children;
  var ctx = React.useContext(SidebarContext);
  var dimensions = useDimensions();
  var minimal = dimensions.width < 768;
  return React.createElement(View$1, {
    style: _extends({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }, style)
  }, React.createElement(View$1, {
    style: _extends({
      width: minimal ? '100%' : dimensions.width - ctx
    }, style)
  }, children));
}

var Storage = {
  loadString: function loadString(name) {
    return null;
  },
  saveString: function saveString(name, value) {
    return null;
  },
  loadJSON: function loadJSON(name) {
    var value = Storage.loadString(name);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  },
  saveJSON: function saveJSON(name, value) {
    return Storage.saveString(name, JSON.stringify(value));
  }
};

Svg.Path = Path;
Svg.G = G;
Svg.Polygon = Polygon;

function Text(_ref) {
  var style = _ref.style,
      oneLine = _ref.oneLine,
      props = _objectWithoutPropertiesLoose(_ref, ["style", "oneLine"]);

  var fontCtx = React.useContext(FontContext);
  return React.createElement(N.Text, _extends({
    numberOfLines: oneLine ? 1 : undefined,
    style: _extends({
      fontFamily: fontCtx.fontFamily,
      fontSize: fontCtx.fontSize,
      fontWeight: fontCtx.fontWeight,
      color: fontCtx.color,
      lineHeight: fontCtx.lineHeight
    }, style)
  }, props));
}
Text.defaultProps = {
  style: {}
};

function Video_native () {
  return null;
}

var View =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, ["style"]);

  return React.createElement(N.View, _extends({
    ref: ref,
    style: _extends({}, style)
  }, props));
});
View.defaultProps = {
  style: {}
};

// animation

function copyToClipboard() {}

export { Audio_native as Audio, Button, Center, CopyToClipboard_native as CopyToClipboard, CropField, FilePicker, FontProvider, Form, HList, Image, Image as ImageZoom, Input, Link, List_native as List, ListReversed, Modal, NavContext, NoUserSelect_native as NoUserSelect, PageTitle, ScrollView, Sidebar, SidebarSafe, StatusBar, Storage, Svg, Text, Touch, Video_native as Video, View, copyToClipboard, useActive, useDimensionsNative as useDimensions, useFocus, useHover, useLegacyState, usePassiveState, usePlatform, usePrevious, useRouter, useTransition };
