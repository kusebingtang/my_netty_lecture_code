package com.shengsiyuan.protobuf;


public class ProtoBufTest {

    public static void main(String[] args) throws Exception {

        DataInfo.Student student = DataInfo.Student.newBuilder().setName("张三").setAddress("杭州").setAge(24).build();

        byte[] student2ByteArray = student.toByteArray();

        DataInfo.Student student2 = DataInfo.Student.parseFrom(student2ByteArray);

        System.out.println(student2.getAddress());
        System.out.println(student2.getName());
        System.out.println(student2.getAge());
    }
}
