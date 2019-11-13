#!/usr/bin/env sh

## 生成Java thrift
thrift --gen java src/thrift/data.thrift
